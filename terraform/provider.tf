terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "4.49.0"
    }
  }
}


provider "azurerm" {
  subscription_id = "0ec12c70-aa89-447d-8f82-8d454c6173b4"
  features {
    resource_group {
      prevent_deletion_if_contains_resources = false # Set to true to prevent deletion of resource groups that contain resources
    }
  }
}


provider "helm" {
  kubernetes = {
    host                   = module.aks.host
    client_certificate     = base64decode(module.aks.client_certificate)
    client_key             = base64decode(module.aks.client_key)
    cluster_ca_certificate = base64decode(module.aks.cluster_ca_certificate)
  }
}
