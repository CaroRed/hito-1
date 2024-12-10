# hito-2

## Descripción
Hito 2 es sobre el manejo de base de datos con PostgreSQL. El proyecto utiliza pgAdmin para la gestión de la base de datos.

## Requisitos
- Node.js
- PostgreSQL
- pgAdmin
- Dependencias de Node.js (ver `package.json`)

## EndPoint
### Login
POST /api/v1/auth/login
http://localhost:3000/api/v1/auth/login

### Register
POST /api/v1/auth/register
http://localhost:3000/api/v1/auth/register

    { 
    "email": "test@example.com",
    "password": "123123"
    }