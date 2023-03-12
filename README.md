# Complete API with NodeJs

## Description
This is a complete API with NodeJs, Express, Sequelize, Postgres, Docker, JWT, Bcrypt, Prettier.

## Usage
1. Create user
  ```bash
    curl -X POST \
      http://localhost:3000/api/v1/users \
      -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzgzMzk2Nzl9.e-8L2MBpcgHUQAxKFrFL8aSmkVsEE0v3w3sV7G5Yo1o' \
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

