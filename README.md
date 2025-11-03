# AKS Portfolio Project with Terraform and GitHub Actions
This repository demonstrates the end-to-end deployment of a portfolio application running on Kubernetes via Terraform, GitHub actions and hosted in Azure Kubernetes Service (AKS).
It’s built to showcase your DevOps / Platform Engineering skills: IaC, CI/CD (GitHub Actions), monitoring stack, modular Terraform, Kubernetes manifests, and a sample application deployment.

## Table of Contents
- [Local Setup](#local-setup)
- [Tech Stack](#tech-stack)
- [Project Screenshots](#project-screenshots)
- [Lesson Learnt and Improvements](#lesson-learnt-and-improvements)
- [Project Summary](#project-summary)

## Local Setup
1. **Install dependencies**:
   ```
   npm 
   npm start
   npm run build
   ```
2. Then browse the application: 
   ```
   http://localhost:3000/
   ```
## Repository structure
        
        /terraform            # Terraform modules & root configs for Azure resources
            ├─ modules/
            ├─ environments/
            └─ main.tf, variables.tf, outputs.tf
        /k8s                  # Kubernetes manifests/Helm charts for workloads & monitoring
            ├─ app/
            └─ monitoring/
        /application           # Sample portfolio application (e.g., web UI, API)
            ├─ frontend/
            └─ backend/
        /.github/workflows    # GitHub Actions workflows: CI, CD, infrastructure deploy
        .gitignore  
        deploy-monitoring.sh   # script to bootstrap monitoring stack manually if required
      

The repo is organised around three domains:

- **terraform/**: provisioning Azure infrastructure using modules (AKS cluster, networking, ACR, Key Vault, etc)
- **k8s/**: Kubernetes manifests
- **application/**: sample portfolio (web front-end + back-end) to deploy into AKS
- **.github/workflows/**: CI/CD pipelines for build, test, deploy.

## Tech Stack used

- ### Azure
    - Leveraged tools such as RBAC, Load balancer, VMSS, ACR (Azure Container Registry), AKS (Azure Kuebernetes Service).  
- ###  Docker
  - The `Dockerfile` defines how the app is containerised
  - The `docker-compose.yml` file provides a simplified local development setup that builds and runs the containerized application.
  - **Multi-stage** build was used to optimise the image size by separating build dependencies from the final lightweight runtime image.
- ### Terraform
  - Used to provision and manage all Azure resources consistently.
  - Utilised Helm provider to deploy Grafana and Prometheus directly onto the Azure AKS cluster, eliminating the need for separate shell scripts or manual configuration.
  - Applied the **DRY (Don't Repeat Yourself)** principle by structuring the code into reusable modules, with the root main.tf orchestrating all child modules from a single configuration.
  - Configured a Storage Account as a remote backend for the Terraform state file, enabling secure collaboration through state lockingand seamless integration with CI/CD workflows.
- ### GitHub Actions 
    - Triggers infrastructure builds either through manual approval or by automatically detecting changes in the Terraform directory.
    - Automates the Docker image build, pushes it to ACR and applies Kubernetes manifest files to deploy the microservice infrastructure.
    -  Builds and scans Docker images using **Trivy**, analyses Terraform configuration files with **Checkov** and performs vulnerability assessments via **SonarCloud**.
    - Destroy infrastucture through manual approval to avoid human-error incidents. 
    - Sends workflow runs alerts to **Microsoft Teams** for improved visibility and traceability.
    - Utilised GitHub Secrets to securely pass sensitive values into workflows, ensuring they are not exposed in the repository or logs.
- ### Monitoring and Observability 
    - Used **Prometheus** for metrics collection.
    - Deployed **Grafana** for metrics visualisation and interactive dashboards.
    - To maintain security best practices, the **Grafana admin password** is automatically stored in Azure Key Vault during deployment, preventing any potential password exposure.

## Project screenshots: 
### All Azure resources

<img width="3432" height="1800" alt="image" src="https://github.com/user-attachments/assets/206daaa7-e619-4ca3-8d93-3290815e5ecf" />


### GitHub CI/CD workflows
<img width="2289" height="540" alt="image" src="https://github.com/user-attachments/assets/a3af45c1-9e4b-4219-b5f3-56b1b9a3d774" />


### SonarQube
<img width="3830" height="1863" alt="image" src="https://github.com/user-attachments/assets/5494eb5f-38ac-4f2c-bb51-20162e98140b" />


### Kubernetes services
<img width="988" height="706" alt="image" src="https://github.com/user-attachments/assets/fac6b403-c65e-4002-b761-8185b92712a0" />

### Prometheus
<img width="3808" height="1279" alt="image" src="https://github.com/user-attachments/assets/8cf6c3a6-1535-48b7-a26f-f5bacb06d3d4" />

### Grafana 
<img width="2342" height="999" alt="image" src="https://github.com/user-attachments/assets/78bc306f-be38-492b-9780-366f84fa365d" />
<img width="3817" height="2066" alt="image" src="https://github.com/user-attachments/assets/8abc68b4-4917-4abf-a343-4af8167e5fc2" />


### MS Teams Alerts
<img width="926" height="892" alt="image" src="https://github.com/user-attachments/assets/d97ad221-37d6-4f6f-b1a7-21b3ac5c8d6a" />


### Application frontend

<img width="3638" height="1678" alt="image" src="https://github.com/user-attachments/assets/69fa9aa8-89d9-437a-b0fa-950c77f99104" />
<img width="2964" height="1628" alt="image" src="https://github.com/user-attachments/assets/fa93a83e-8764-4d03-bcc9-123de89c0e4d" />
<img width="2238" height="1869" alt="image" src="https://github.com/user-attachments/assets/a114cbed-927b-43c5-bc38-93fab39137fc" />


## Lesson Learnt and Improvements
This project can be extended by adding environment overlays for dev and prod with separate Terraform states or workspaces, implementing GitOps tools like Argo CD or Flux for managing application and cluster lifecycles. Security can be enhanced through Azure Policies, Kubernetes Network and Pod Security Policies.Additionally, the application can be made more resilient with horizontal scaling and safe deployment strategies like blue/green or canary,


# Project Summary
This project demonstrates end-to-end cloud infrastructure automation and deployment using Terraform, Azure, and Kubernetes. It showcases how to design and structure Terraform modules to provision Azure resources such as AKS, networking, and container registries and how to package and deploy applications with integrated monitoring tools like Prometheus and Grafana. The project also highlights the implementation of CI/CD automation through GitHub Actions, enabling a seamless workflow from code commit to production. Overall, it brings together key DevOps and Platform Engineering practices across infrastructure, containerisation, automation and observability.






