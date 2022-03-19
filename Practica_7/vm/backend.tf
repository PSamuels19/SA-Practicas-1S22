terraform {
  backend "gcs" {
    bucket          = "sa-tfstate-bucket"
    prefix          = "vm/terraform.tfstate"

  }
}