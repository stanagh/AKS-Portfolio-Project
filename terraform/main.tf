data "azurerm_client_config" "current" {}

resource "random_integer" "suffix" {
  min = 1000
  max = 9999
}

resource "random_password" "grafana_admin" {
  length  = 16
  special = true
}

resource "azurerm_resource_group" "rg" {
  name     = "infra-rg"
  location = local.location
  tags     = local.tags
}

module "storage" {
  source                   = "./modules/storage"
  storage_account_name     = "${local.location_short}storage${local.environment}${random_integer.suffix.result}"
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = local.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  tags                     = local.tags
  min_tls_version          = "TLS1_2"
}

module "keyvault" {
  source                      = "./modules/keyvault"
  key_vault_name              = "${local.location_short}kv${local.environment}-${random_integer.suffix.result}"
  location                    = local.location
  resource_group_name         = azurerm_resource_group.rg.name
  enabled_for_disk_encryption = true
  tags                        = local.tags
  soft_delete_retention_days  = 7
  sku_name                    = "standard"
  key_vault_secret_grafana    = "grafana-admin-password"
  grafana_admin_password      = random_password.grafana_admin.result
  tenant_id                   = data.azurerm_client_config.current.tenant_id
  principal_id = data.azurerm_client_config.current.object_id
  rbac_authorization_enabled = true
  role_definition_name = "Key Vault Secrets Officer"
}


module "acr" {
  source              = "./modules/acr"
  acr_name            = "infraacrdev"
  resource_group_name = azurerm_resource_group.rg.name
  location            = local.location
  sku                 = "Standard"
  admin_enabled       = false
  tags                = local.tags
}

resource "azurerm_role_assignment" "acr_pull" {
  principal_id         = module.aks.kubelet_identity_object_id
  role_definition_name = "AcrPull"
  scope                = module.acr.acr_id
  depends_on           = [module.aks, module.acr]
}

module "aks" {
  source                            = "./modules/aks"
  aks_cluster_name                  = "infraaks"
  resource_group_name               = azurerm_resource_group.rg.name
  location                          = local.location
  dns_prefix                        = "${local.prefix}-aks-${local.environment}"
  node_count                        = 2
  node_vm_size                      = "Standard_B2s"
  identity_type                     = "SystemAssigned"
  tags                              = local.tags
  role_based_access_control_enabled = true
}

module "dns" {
  source              = "./modules/dns"
  resource_group_name = azurerm_resource_group.rg.name
  location            = local.location
  dns_name            = "stanley-portfolio.com"
  a_record_name       = "dev"
  public_ip_name      = "${local.environment}-pip-${local.prefix}-${random_integer.suffix.result}"
  public_ip_sku       = "Standard"
  ttl                 = 300
  tags                = local.tags
}

module "aks_monitoring" {
  source                  = "./modules/k8s_monitoring"
  prometheus_release_name = "prometheus"
  prometheus_repository   = "https://prometheus-community.github.io/helm-charts"
  prometheus_chart        = "kube-prometheus-stack"
  create_namespace        = true
  grafana_reportory       = "https://grafana.github.io/helm-charts"
  grafana_chart           = "grafana"
  grafana_release_name    = "grafana"
  namespace               = "monitoring"
  grafana_admin_password  = random_password.grafana_admin.result
  depends_on              = [module.aks, module.keyvault]
}


