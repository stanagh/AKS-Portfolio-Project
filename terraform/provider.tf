terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "4.44.0"
    }
  }
}

provider "azurerm" {
  subscription_id = "0ec12c70-aa89-447d-8f82-8d454c6173b4"
  features {}
}