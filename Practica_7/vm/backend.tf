terraform {
  backend "gcs" {
    bucket          = "tfstate-bucket-4291-pareja9-default"
    prefix          = "vm/terraform.tfstate"

  }
}