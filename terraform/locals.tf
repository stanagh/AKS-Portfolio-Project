locals {

  prefix      = "infra"
  environment = "dev"
  location    = "uksouth"

  rg_name = "${local.environment}-rg-${local.prefix}-${random_integer.suffix.result}"

  tags = {
    environment = local.environment
  }

}
