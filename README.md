# Hito 2

## Descripción
Hito 2 es sobre el manejo de base de datos con PostgreSQL. El proyecto utiliza pgAdmin para la gestión de la base de datos.

## Requisitos
- Node.js
- PostgreSQL
- pgAdmin
- Dependencias de Node.js (ver `package.json`)

## Endpoints
Todos los endpoints requieren de un Bearer Token, excepto **register** y **login**.

### Users

#### Register
**POST /api/v1/auth/register**  
http://localhost:3000/api/v1/auth/register

```json
{
    "email": "test@example.com",
    "password": "123123"
}
```

#### Login
>**POST /api/v1/auth/login**  
>http://localhost:3000/api/v1/auth/login

#### Get all users
>**GET /api/v1/users**   
>http://localhost:3000/api/v1/users

#### Get one by id
>**GET /api/v1/users/{id}**   
>http://localhost:3000/api/v1/users/{id}

#### Update
>**PUT /api/v1/users/{id}**   
>http://localhost:3000/api/v1/users/{id}

#### Delete
>**DELETE /api/v1/users/{id}**   
>http://localhost:3000/api/v1/users/{id}

### Books
#### Get all books
>**GET /api/v1/books**   
>http://localhost:3000/api/v1/books

#### Get one by id
>**GET /api/v1/books/{id}**   
>http://localhost:3000/api/v1/books/{id}

#### Update
>**PUT /api/v1/books/{id}**   
>http://localhost:3000/api/v1/books/{id}

#### Delete
>**DELETE /api/v1/books/{id}**   
>http://localhost:3000/api/v1/books/{id}