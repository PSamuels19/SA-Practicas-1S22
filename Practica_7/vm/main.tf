resource "google_compute_address" "static" {
  name = "ip-external-ideasextraordinarias"
}

resource "google_compute_instance" "vm_instance" {
  name         = "terraform-instance"
  machine_type = "e2-medium"
  zone         =  "us-central1_c"  
  tags = [
    "${var.environment}-vm-http",
    "${var.environment}-vm-ssh"
     ]
  project      =  var.gcp_project_id
  description   = "${var.client}-${var.environment}-${data.google_compute_subnetwork.subnet-1.ip_cidr_range}"
  network_interface { 
    subnetwork = "${data.google_compute_subnetwork.subnet-1.name}"   
    subnetwork_project = var.gcp_project_id 
    access_config {
      nat_ip = google_compute_address.static.address
    }
  }
  boot_disk {
    initialize_params {
      image = "ubuntu-1804-bionic-v20220213"
    }
  }
  metadata = {
     # ssh-keys = "${var.ssh_user}:${var.ssh_pub_key_file}"
     # enable-oslogin = "TRUE"  Esto no me funciono aplicando permisos a los usuarios.
      
  }

  metadata_startup_script = file("${var.metadata_startup_script}") # "${var.metadata_startup_script}"
}

resource "google_compute_firewall" "http" {
  name    = "${var.environment}-firewall-http"
  network = "${data.google_compute_network.vpc.name}" # "${google_compute_network.ovirt_network.name}"
  
  allow {
    protocol = "tcp"
    ports    = ["80", "443"]
  }

  target_tags   = ["${var.environment}-bastion-http"]
  source_ranges = ["0.0.0.0/0"]
}

resource "google_compute_firewall" "ssh" {
  name    = "${var.environment}-firewall-ssh"
  network = "${data.google_compute_network.vpc.name}"

  allow {
    protocol = "tcp"
    ports    = ["22"]
  }

  target_tags   = ["${var.environment}-bastion-ssh"]
  source_ranges = ["0.0.0.0/0"]
}