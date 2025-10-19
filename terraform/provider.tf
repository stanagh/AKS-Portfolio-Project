terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      # version = "3.66.0"
      version = "4.48.0"
    }
  }
  # required_version = ">= 1.0.0"
}


provider "azurerm" {
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
