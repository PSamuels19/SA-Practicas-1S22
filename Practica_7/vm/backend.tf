terraform {
  backend "gcs" {
    bucket          = "tfstate-bucket-4291-terraform-default"
    prefix          = "vm/terraform.tfstate"

  }
}