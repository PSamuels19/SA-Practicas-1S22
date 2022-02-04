# Práctica 1

## Enunciado

Realizar una aplicación SOA para simular un servicio de crowdsourcing de comida a domicilio, esta debe contar con seguridad de solicitud de JWT para hacer uso de la misma, a continuación, se describe 4 microservicios para su creación, **NO HACE FALTA QUE TENGAN BASES DE DATOS**.

- Login
  - Validar 3 tipos de usuario, Cliente, Restaurante y Repartidor.
  - Denegar accesos si no corresponden a su rol.
- Cliente
  - Solicitar pedido al restaurante
  - Verificar estado del pedido al restaurante
  - Verificar estado del pedido al repartidor
- Restaurante
  - Recibir pedido del cliente
  - Informar estado del pedido al cliente
  - Avisar al repartidor que ya está listo el pedido
- Repartidor
  - Recibir pedido del restaurante
  - Informar estado del pedido al cliente
  - Marcar como entregado

## Paquetes npm utilizados

- Servidor principal
    - "axios": "0.25.0",
    - "cors": "2.8.5",
    - "dotenv": "14.3.2",
    - "express": "4.17.2",
    - "mongoose": "6.1.8",
    - "morgan": "1.10.0",
    - "winston": "3.5.0"
    - "@babel/cli": "7.16.8",
    - "@babel/core": "7.16.12",
    - "@babel/node": "7.16.8",
    - "@babel/preset-env": "7.16.11",
    - "nodemon": "2.0.15"
- Login
    - "axios": "0.25.0",
    - "cors": "2.8.5",
    - "dotenv": "14.3.2",
    - "express": "4.17.2",
    - "jsonwebtoken": "8.5.1",
    - "morgan": "1.10.0"
    - "@babel/cli": "7.16.8",
    - "@babel/core": "7.16.12",
    - "@babel/node": "7.16.8",
    - "@babel/preset-env": "7.16.11",
    - "nodemon": "2.0.15"
- Cliente
    - "axios": "0.25.0",
    - "cors": "2.8.5",
    - "dotenv": "14.3.2",
    - "express": "4.17.2",
    - "morgan": "1.10.0"
    - "@babel/cli": "7.16.8",
    - "@babel/core": "7.16.12",
    - "@babel/node": "7.16.8",
    - "@babel/preset-env": "7.16.11",
    - "nodemon": "2.0.15"
- Restaurante
    - "axios": "0.25.0",
    - "cors": "2.8.5",
    - "dotenv": "14.3.2",
    - "express": "4.17.2",
    - "morgan": "1.10.0"
    - "@babel/cli": "7.16.8",
    - "@babel/core": "7.16.12",
    - "@babel/node": "7.16.8",
    - "@babel/preset-env": "7.16.11",
    - "nodemon": "2.0.15"
- Repartidor
    - "axios": "0.25.0",
    - "cors": "2.8.5",
    - "dotenv": "14.3.2",
    - "express": "4.17.2",
    - "morgan": "1.10.0"
    - "@babel/cli": "7.16.8",
    - "@babel/core": "7.16.12",
    - "@babel/node": "7.16.8",
    - "@babel/preset-env": "7.16.11",
    - "nodemon": "2.0.15"

## Rutas permitidas

- Para sesion
  - Iniciar sesión [](http://localhost:80/api/auth/signin)
    ```json
    {
        "email": "mrosthorn0@purevolume.com",
        "password": "AjsfhHVx"
    }
    ```
- Para cliente
  - Solicitar pedido al restaurante [](http://localhost:80/api/cliente)
  - Verificar estado del pedido al restaurante [](http://localhost:80/api/cliente/restaurante/pedido/:id)
  - Verificar estado del pedido al repartidor [](http://localhost:80/api/cliente/repartidor/pedido/:id)
- Para repartidor
  - Recibir pedido del cliente [](http://localhost:80/api/repartidor)
  - Informar estado del pedido al cliente [](http://localhost:80/api/repartidor/restaurante/pedido/:id)
  - Avisar al repartidor que ya está listo el pedido [](http://localhost:80/api/repartidor/repartidor/pedido/:id)
- Para restaurante
  - Recibir pedido del restaurante [](http://localhost:80/api/restaurante)
  - Informar estado del pedido al cliente [](http://localhost:80/api/restaurante)
  - Marcar como entragado [](http://localhost:80/api/restaurante)