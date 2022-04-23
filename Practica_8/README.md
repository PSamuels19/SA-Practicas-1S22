# Práctica 8

1. Configurar frontend para comunicarse con backend

    - node-service: Nombre del pod del backend
    - En el URI del frontend, se omitió la base url

`js
const URI = '/api/';
`

`nginx
upstream node-service {
    server node-service:3000;
}

server {
    listen 80;
    server_name localhost;
    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
    }
    location /api {
        proxy_pass http://node-service;
    }
    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root /usr/share/nginx/html;
    }
}
`

1. Hacer pull de las imagenes docker

`docker pull macochave/sa-backend-p8`

`docker pull macochave/sa-frontend-p8`

2. Crear el deployment del servidor

`kubectl apply -f node-deployment.yaml`

1. Exponer el servicio para el backend

`kubectl expose deployment node-deployment --type=LoadBalancer --name=node-service`

1. Crear el deployment del cliente

`kubectl apply -f nginx-deployment.yaml`

1. Exponer el servicio para el frontend

`kubectl expose deployment frontend-deployment --type=LoadBalancer --name=frontend-service`