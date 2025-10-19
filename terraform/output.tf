output "resource_group_name" {
    description = "The name of the Resource Group"
    value       = azurerm_resource_group.rg.name
}

output "acr_name" {
    description = "The name of the Azure Container Registry"
    value       = module.acr.acr_name
}

output "aks_cluster_name" {
  description = "The name of the AKS cluster"
  value       = module.aks.aks_cluster_name
}