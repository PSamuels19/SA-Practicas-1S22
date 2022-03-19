#!/bin/bash

# Installing kubectl on an Ubuntu machine
sudo apt-get update && sudo apt-get install -y apt-transport-https
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list
sudo apt-get update
sudo apt-get install -y kubectl

# Installing Docker on an Ubuntu machine
sudo apt install -y docker.io
sudo usermod -aG docker $USER
sudo apt install nano -y 
sudo apt-get install apache2 -y && echo '<!doctype html><html><body><h1>Hola somos el grupo #9 desde Terraform en Google Cloud!</h1></body></html>' | sudo tee /var/www/html/index.html
