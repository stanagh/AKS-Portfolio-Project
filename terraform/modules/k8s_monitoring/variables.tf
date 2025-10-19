variable "prometheus_release_name" {
  description = "The name of the Prometheus Helm release"
  type        = string

}

variable "prometheus_repository" {
  description = "The Helm repository URL for Prometheus"
  type        = string
  default     = "https://prometheus-community.github.io/helm-charts"
}

variable "prometheus_chart" {
  description = "The name of the Prometheus Helm chart to deploy"
  type        = string
  default     = "kube-prometheus-stack"

}

variable "create_namespace" {
  description = "Whether to create the Kubernetes namespace for the monitoring stack"
  type        = bool
  default     = true
}

variable "grafana_reportory" {
  description = "The Helm repository URL for Grafana"
  type        = string
  default     = "https://grafana.github.io/helm-charts"
}

variable "grafana_chart" {
  description = "The name of the Grafana Helm chart to deploy"
  type        = string
  default     = "grafana"

}

variable "grafana_release_name" {
  description = "The name of the Grafana Helm release"
  type        = string

}
variable "grafana_admin_password" {
  description = "The admin password for Grafana"
  type        = string
  sensitive   = true
}

variable "namespace" {
  description = "The Kubernetes namespace to deploy the monitoring stack"
  type        = string

}