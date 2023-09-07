## Iniciar un proyecto de node

```bash
npm init -y
```

## Agregar express mysql y variables de entorno

```bash
npm i express mysql2 dotenv
```

## Creas el index.js

## Empezar el docker compose

## Construir el docker compose

```bash
docker-compose up --build
```

```yml
version: "3.8"

services:
  mysqldb:
    image: mysql
    container_name: my-mysql-container
    environment:
      MYSQL_ROOT_PASSWORD: meraki
      MYSQL_DATABASE: luisdb
      MYSQL_USER: luis
      MYSQL_PASSWORD: meraki
    ports:
      - "4000:3306"
```

## Construir la imagen del dockerfile

```bash
docker build -t nodemysql .
```

```json
FROM node:18

WORKDIR /myapp

COPY package.json .
RUN npm install

COPY . .

CMD npm start
```

## Terminas el docker compose

```bash
docker-compose up --build
```

```yml
version: "3.8"

services:
  mysqldb:
    image: mysql
    container_name: my-mysql-container
    environment:
      MYSQL_ROOT_PASSWORD: meraki
      MYSQL_DATABASE: luisdb
      MYSQL_USER: luis
      MYSQL_PASSWORD: meraki
    ports:
      - "4000:3306"

  app:
    build: . #construccion del dockerfile
    depends_on:
      - mysqldb
    links:
      - mysqldb
    ports:
      - "3000:3000"
```

## Crear .env

```js
MYSQLDB_HOST = mysqldb;
MYSQLDB_ROOT_PASSWORD = meraki;
MYSQLDB_DATABASE = meraki;
MYSQLDB_USER = root;

MYSQLDB_LOCAL_PORT = 4000;
MYSQLDB_DOCKER_PORT = 3306;

NODE_LOCAL_PORT = 3000;
NODE_DOCKER_PORT = 3000;
```

## Modificar docker-compose.yml

```yml
version: "3.8"

services:
  mysqldb:
    image: mysql
    env_file: ./.env
    container_name: my-mysql-container
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQLDB_ROOT_PASSWORD}
      MYSQL_DATABASE: ${MYSQLDB_DATABASE}
    ports:
      - ${MYSQLDB_LOCAL_PORT}:${MYSQLDB_DOCKER_PORT}

  app:
    build: . #construccion del dockerfile
    depends_on:
      - mysqldb
    links:
      - mysqldb
    ports:
      - ${NODE_LOCAL_PORT}:${NODE_DOCKER_PORT}
```
