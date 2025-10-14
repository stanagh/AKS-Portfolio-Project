terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.66.0"
    }
  }
  required_version = ">= 1.0.0"
}


provider "azurerm" {
  # subscription_id = var.subscription_id
  # tenant_id       = var.tenant_id
  features {}
  skip_provider_registration = true
}