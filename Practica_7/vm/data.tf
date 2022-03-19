provider "google" {
  project     = var.gcp_project_id
  region      = var.gcp_zone
}

data "google_compute_network" "vpc" {
  name       = var.gcp_vpc_name #  gcp_vpc_name
  project    = var.gcp_project_id
}

data "google_compute_subnetwork" "subnet-1" {
  name   = var.gcp_subnet_1  
  region = var.gcp_zone
}

data "google_compute_zones" "available" {
  region = var.gcp_zone  #"us-central1_c" 
  status = "UP"
}
