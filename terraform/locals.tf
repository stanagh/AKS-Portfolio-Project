locals {

  prefix      = "infra"
  environment = "dev"
  location    = "uksouth"

  rg_name     = "${local.prefix}-rg-${local.environment}-${random_integer.suffix.result}"

    tags = {
        environment = local.environment
    }
    
}
