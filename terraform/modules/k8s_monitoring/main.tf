resource "helm_release" "prometheus" {
  name             = var.prometheus_release_name
  repository       = var.prometheus_repository
  chart            = var.prometheus_chart
  create_namespace = var.create_namespace
  namespace        = var.namespace

  depends_on = [kubernetes_namespace.monitoring]
}

resource "helm_release" "grafana" {
  name             = var.grafana_release_name
  repository       = var.grafana_reportory
  chart            = var.grafana_chart
  create_namespace = var.create_namespace
  namespace        = var.namespace
  set = [
    {
      name  = "adminPassword"
      value = var.grafana_admin_password
    }
  ]

  depends_on = [kubernetes_namespace.monitoring]
}