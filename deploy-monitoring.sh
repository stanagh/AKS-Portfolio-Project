#!/bin/bash

# Add the Prometheus Helm chart repository
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

# Install the Prometheus Helm chart
helm install prometheus prometheus-community/prometheus


# Add the Grafana Helm chart repository
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update

# Install the Grafana Helm chart
helm install grafana grafana/grafana --namespace monitoring --create-namespace

# Retrieve and display the Grafana admin password
kubectl get secret --namespace monitoring my-grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo

export POD_NAME=$(kubectl get pods --namespace monitoring -l "app.kubernetes.io/name=grafana,app.kubernetes.io/instance=grafana-86777b7fc6-g6st9 " -o jsonpath="{.items[0].metadata.name}")

kubectl --namespace monitoring port-forward $POD_NAME 3000

