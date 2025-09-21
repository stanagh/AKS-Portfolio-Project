output "aks_cluster_name" {
  description = "The name of the AKS cluster"
  value       = azurerm_kubernetes_cluster.aks_cluster.name
}

output "kubelet_identity_object_id" {
  description = "The object ID of the AKS cluster's kubelet identity"
  value       = azurerm_kubernetes_cluster.aks_cluster.kubelet_identity[0].object_ids
}

output "aks_cluster_id" {
  description = "The ID of the AKS cluster"
  value       = azurerm_kubernetes_cluster.aks_cluster.id
}

