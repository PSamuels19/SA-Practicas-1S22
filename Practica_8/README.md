# Práctica 8

1. Hacer pull de las imagenes docker

`docker pull macochave/sa-backend-p8`
`docker pull macochave/sa-frontend-p8`

2. Crear las imagenes docker

`docker-compose up -d`

2. Crear el deployment del servidor

`kubectl apply -f node-deployment.yaml`

1. Crear el servicio del servidor

`kubectl apply -f node-service.yaml`

1. Crear el deployment del cliente

`kubectl apply -f nginx-deployment.yaml`

1. Crear el servicio del cliente

`kubectl apply -f nginx-service.yaml`