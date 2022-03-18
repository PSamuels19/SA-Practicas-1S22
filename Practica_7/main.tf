terraform {
	required_providers {
		google = {
			source = "hasicorp/google"
			version = "~>3.0"
		}
	}
}

provider "google" {
	credentials = file("/home/terraform-user.json")
	project = "instance-terraform"
	region = "us-west4"
	zone = "us-west4-b"
}

resource "google_compute_firewall" "firewall" {
  name        = "f-externalssh"
  network     = "default"
  description = "Creates firewall rule targeting tagged instances"

  allow {
    protocol  = "tcp"
    ports     = ["80", "8080", "22"]
  }

  source_tags = ["0.0.0.0/0"]
  target_tags = ["externalssh"]
}

resource "google_compute_address" "static_address" {
  name = "dir"
  depends_on = [google_compute_firewall.firewall]
}

resource "google_compute_network" "vpc_network" {
  name = "terraform-network"
}

data "google_compute_instance" "vm_instance" {
  name = "terraform_instance"
  machine_type = "e2-medium"

  boot_disk {
  	initialize_params {
  		image = "debian-10-buster-v20220310"
  	}
  }

  network_interface {
  	name = "google_compute_network.vpc_network.name"

  	access_config {
  		nat_ip = google_compute_address.static_address.address
  	}
  }
}