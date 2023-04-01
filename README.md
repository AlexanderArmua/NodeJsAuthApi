# Complete API with NodeJs

## Description
This is a complete API with NodeJs, Express, Sequelize, Postgres, Docker, JWT, Bcrypt, Prettier.

## Usage
1. Create user
  ```bash
    curl -X POST \
      http://localhost:3000/api/v1/users \
      -H 'authorization: Bearer {{token}}' \
      -H 'cache-control: no-cache' \
      -H 'content-type: application/json' \
      -H 'origin: http://localhost:8080' \
      -H 'postman-token: 3d0c8d3e-c20e-7661-259b-5c9b84b2d0ea' \
      -H 'x-api-key: 12345' \
      -d '{
      "email": "yourEmail@yourDomain.com",
      "password": "password",
      "role": "admin"
    }'
  ```

2. Login user
  ```bash
    curl -X POST \
    http://localhost:3000/api/v1/auth/login \
    -H 'cache-control: no-cache' \
    -H 'content-type: application/json' \
    -H 'origin: http://localhost:8080' \
    -H 'postman-token: 3bfaa1e4-7489-4d0b-2f70-a66448b09425' \
    -H 'x-api-key: 12345' \
    -d '{
    "email": "yourEmail@yourDomain.com",
    "password": "password"
  }'
  ```

3. Copy token
4. Add token as a header to all requests in the following format
  ```bash
  -H 'authorization: Bearer <YOUR_TOKEN>' \
  ```
5. The endpoints are in the file 'postman-collection.json'

## Commands
### Install dependencies
  ```bash
  npm run containers:start
  npm install
  ```

### Run migrations
  ```bash
  npm run migrations:run
  ```

### Run
  ```bash
  npm run dev
  ```

### Create migrations
  ```bash
  npm run migrations:generate <migration-name>
  ```

### Upload file example
#### POST: /products/
#### Expects a form-data with the following fields
  ```bash
  name: string
  description: string
  price: number
  file: file
  ```

### Sockets example
On the file /socket.js you can find an example of how to use sockets with socket.io
There are plenty of examples on the internet, but I wanted to show you how to use it with NodeJs and Express.

with socket.io.emit you can send a message to all the clients connected to the server

after a client connects to the server, you can send a message to that client with socket.emit and also can save the socket.id in the server to send messages to that client in the future

In the endpoint POST: /login we send a different event to the users
