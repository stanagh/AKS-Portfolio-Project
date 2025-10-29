locals {

  prefix         = "infra"
  environment    = "prod"
  location       = "uksouth"
  location_short = "uks"

  rg_name = "${local.location_short}-rg-${local.environment}-${random_integer.suffix.result}"

  tags = {
    environment = local.environment
    location    = local.location
    managed_by  = "terraform"
    cost_center = "CC-12334"
    project     = "Project-AKS"
  }

}
