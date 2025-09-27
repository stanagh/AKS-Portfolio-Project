data "azurerm_client_config" "current" {}

resource "random_integer" "suffix" {
  min = 1000
  max = 9999
}

resource "azurerm_resource_group" "rg" {
  name     = local.rg_name
  location = local.location
  tags     = local.tags
}

module "storage" {
  source                   = "./modules/storage"
  storage_account_name     = "${local.prefix}storage${random_integer.suffix.result}"
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = local.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  tags                     = local.tags
  min_tls_version          = "TLS1_2"
}

module "keyvault" {
  source                      = "./modules/keyvault"
  key_vault_name              = "${local.prefix}-kv-${local.environment}-${random_integer.suffix.result}"
  location                    = local.location
  resource_group_name         = azurerm_resource_group.rg.name
  enabled_for_disk_encryption = true
  tags                        = local.tags
  soft_delete_retention_days  = 7
  purge_protection_enabled    = false
  sku_name                    = "standard"
  tenant_id                   = var.tenant_id
}

module "acr" {
  source              = "./modules/acr"
  acr_name            = "${local.prefix}acr${random_integer.suffix.result}"
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
  source              = "./modules/aks"
  aks_cluster_name    = "${local.prefix}-aks-${local.environment}-${random_integer.suffix.result}"
  resource_group_name = azurerm_resource_group.rg.name
  location            = local.location
  dns_prefix          = "${local.prefix}-aks-${local.environment}"
  node_count          = 2
  node_vm_size        = "Standard_B2s"
  identity_type       = "SystemAssigned"
  tags                = local.tags
  role_based_access_control_enabled = true 
}

module "dns" {
  source              = "./modules/dns"
  resource_group_name = azurerm_resource_group.rg.name
  location            = local.location
  dns_name            = "stanagh.com"
  a_record_name       = "www"
  public_ip_name      = "${local.prefix}-pip-${local.environment}-${random_integer.suffix.result}"
  public_ip_sku       = "Standard"
  ttl                 = 300
  tags                = local.tags
}



