variable "resource_group_name" {
  description = "The name of the resource group in which to create the Container Registry."
  type        = string
}

variable "location" {
  description = "The Azure region where the Container Registry will be created."
  type        = string
}

variable "acr_name" {
  description = "The name of the Container Registry. Must be between 5 and 50 characters in length and use numbers and lower-case letters only."
  type        = string
}

variable "sku" {
  description = "The SKU of the Container Registry. Valid options are 'Basic', 'Standard' and 'Premium'."
  type        = string
  default     = "Standard"
}

variable "admin_enabled" {
  description = "Specifies whether the admin user is enabled. Defaults to false."
  type        = bool
  default     = false
}

variable "tags" {
  description = "A mapping of tags to assign to the resource."
  type        = map(string)
  default     = {}

}

variable "data_endpoint_enabled" {
  description = "Specifies whether the data endpoint is enabled."
  type        = bool
  default     = true
}

variable "quarantine_policy_enabled" {
  description = "Specifies whether the quarantine policy is enabled."
  type        = bool
  default     = true
}

variable "retention_policy_in_days" {
  description = "Specifies the number of days to retain untagged manifests."
  type        = number
  default     = 7
}

variable "zone_redundancy_enabled" {
  description = "Specifies whether zone redundancy is enabled. Only available for Premium SKU."
  type        = bool
}

variable "georeplications_location" {
  description = "A list of locations for geo-replication. Only available for Premium SKU."
  type        = list(string)
}

variable "public_network_access_enabled" {
  description = "Specifies whether public network access is enabled."
  type        = bool

}