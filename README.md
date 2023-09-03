# Docker-Project

## Iniciar docker

systemctl start docker

## Crear la imagen del dockerfile

docker build -t nodealpha .

## Comando para montar el contenedor

docker run --name server1 -dp 3000:3000 nodealpha

## Ejecutar la aplicacion dentro del contenedor

docker exec -it server1 bash

# Utilizando dev container

Devcontainer permite usar el visual studio code desde el contenedor.
creas el dev container: Ctrl + shift + p -> Add dev container
Puedes crear un devcontainer de la siguiente manera:

```json
{
  "name": "Node Docker",
  "build": {
    // Sets the run context to one level up instead of the .devcontainer folder.
    "context": "..",
    // Update the 'dockerFile' property if you aren't using the standard 'Dockerfile' filename.
    "dockerfile": "../Dockerfile"
  },
  "settings": {
    "terminal.integrated.defaultProfile.linux": "zsh",
    "terminal.integrated.profiles.linux": {
      "zsh": {
        "path": "zsh"
      }
    }
  },
  // Features to add to the dev container. More info: https://containers.dev/features.
  // "features": {},
  // Use 'forwardPorts' to make a list of ports inside the container available locally.
  "forwardPorts": [3000]
  // Uncomment the next line to run commands after the container is created.
  // "postCreateCommand": "cat /etc/os-release",
  // Configure tool-specific properties.
  // "customizations": {},
  // Uncomment to connect as an existing user other than the container default. More info: https://aka.ms/dev-containers-non-root.
  // "remoteUser": "devcontainer"
}
```

# Usando Docker compose

## Crear un archivo docker-compose.yml como este:

```yml
version: "3.9"

services:
  node-beta:
    image: nodealpha
    container_name: projectnode
    ports:
      - 5000:3000
    build: .
    command: node server.js

  db:
    image: mongo
    container_name: mymongo
    ports:
      - 27017:27017
```

## Ejecutar el comando

```bash
docker-compose up
```

```bash
docker-compose up --build
```
