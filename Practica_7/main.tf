terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "3.5.0"
    }
  }
}

provider "google" {
  credentials = file("./terraform-user.json")
  project     = "My First Project"
  region      = "us-east1"
  zone        = "us-east1-c"
}

resource "google_compute_firewall" "firewall" {
  name    = "f-externalssh"
  network = "default"
  allow {
    protocol = "tcp"
    ports    = ["8080", "80", "22"]
  }
  source_ranges = ["0.0.0.0/0"]
  source_tags   = ["externalssh"]
}

resource "google_compute_address" "static_add" {
  name       = "dir"
  depends_on = [google_compute_firewall.firewall]
}

resource "google_compute_network" "vpc_network" {
  name = "terraform-network"
}

resource "google_compute_instance" "vm_instance" {
  name         = "terraform-instance"
  machine_type = "e2-medium"

  boot_disk {
    initialize_params {
      image = "ubuntu-1804-bionic-v20220213"
    }
  }

  network_interface {
    network = google_compute_network.vpc_network.name

    access_config {
      nat_ip = google_compute_address.static_add.address
    }
  }
}