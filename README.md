# Express API Project

Este proyecto es una API REST simple construida con Express.js que proporciona endpoints para gestionar usuarios.

## Características

- API REST con Express.js
- Endpoints para listar y obtener usuarios
- Pruebas unitarias con Jest
- Dockerización de la aplicación
- Pipeline de CI/CD con Jenkins

## Requisitos

- Node.js 14 o superior
- Docker
- Jenkins (para CI/CD)

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/ErnestoDiazM/desafiofinalcicd.git

# Instalar dependencias
npm install
```

## Ejecución

### Modo desarrollo

```bash
node app.js
```

### Con Docker

```bash
# Construir la imagen
docker build -t express-api .

# Ejecutar el contenedor
docker run -p 3001:3000 --name express-app express-api
```

## Endpoints

- `GET /`: Health check
- `GET /users`: Obtener todos los usuarios
- `GET /users/:id`: Obtener un usuario por ID

## Pruebas

```bash
npm test
```

## CI/CD con Jenkins

El proyecto incluye un pipeline de Jenkins que automatiza:

1. Clonación del repositorio
2. Instalación de dependencias
3. Ejecución de pruebas
4. Construcción de imagen Docker
5. Ejecución del contenedor Docker
6. Generación de reportes

## Estructura del Proyecto

```
├── app.js              # Punto de entrada de la aplicación
├── db.json             # Base de datos JSON
├── Dockerfile          # Configuración para Docker
├── Jenkins             # Configuración del pipeline de Jenkins
├── package.json        # Dependencias y scripts
└── tests/              # Pruebas unitarias
    └── app.test.js     # Pruebas para la API
```
