# Backend Tarea Development Adara

API desarrollada para el proceso de postulación de Adara.

## Tecnologías Utilizadas :computer:

```json
{
    "language": "Node.js",
    "framework": "Express",
    "packageManager": "npm"
}
```




## Configuración Inicial :wrench:

1. Instalar las dependencias:

```bash
$ npm install
```

2. Crear archivo `.env` para las variables de entorno:

```env
NODE_ENV=
PORT=
DB_DIALECT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
DB_HOST=
DB_PORT=
SALT_ROUNDS=
```

A modo de ejemplo se puede llenar utilizando los siguientes datos:

```env
NODE_ENV=development
PORT=3001
DB_DIALECT=postgres
DB_DATABASE=adara_db
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432
SALT_ROUNDS=10
```

3. Crear y migrar base de datos con el ORM:

```bash
$ npx sequelize-cli db:create
$ npx sequelize-cli db:migrate
```

Si se realizaron todos los pasos previos de manera correcta, podemos iniciar la API con el siguiente comando:

```bash
$ npm start
```
