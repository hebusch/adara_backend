# Backend Tarea Development Adara

API desarrollada para el proceso de postulación de Adara.

Repositorio frontend: https://github.com/hebusch/adara_frontend

## Tecnologías Utilizadas :computer:

```json
{
    "language": "Node.js",
    "framework": "Express.js",
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

## ¿Qué hice y cómo lo hice?

#### Endpoints 

Implementé dos endpoints utilizando `Express.js`:

* `POST /user`: Ruta para crear un nuevo usuario, recibe como parametro todos los atributos correspondientes al usuario y lo guarda en base de datos. Retorna al cliente un estado 200, un mensaje indicando el éxito de la request y el correo del usuario creado.

* `GET /user/:email`: Ruta para obtener la información de un usuario de correo `:email`. Si el usuario no existe retorna al cliente el estado 404. Si el usuario existe, retorna al cliente el estado 200, un mensaje indicando el éxito de la request y toda la información del usuario exceptuando la contraseña.

#### Encriptación de contraseñas

Se utilizó la librería `bcrypt` para guardar en base de datos la contraseña de los usuarios de manera segura. Utiliza la variable de entorno `SALT_ROUNDS` para aumentar la seguridad del cifrado.

#### ORM

Se utilizó `Sequelize` como ORM para facilitar las querys a la base de datos y la creación de modelos para guardar la información. 
Es este caso se creo el modelo `User`.


#### Validaciones

Se realizó validaciones a nivel de backend para garantizar el correcto manejo de información. Teniendo la validación en dos niveles (frontend y backend), se minimiza el riesgo de guardar información no deseada. Sin embargo, aún es posible garantizar aún más el control de la información agregando las validaciones al ORM.

#### ¿Qué me faltó?

Para el backend me faltó realizar los tests. Esto se debe a la limitación de tiempo impuesta. Todo lo que alcancé a hacer lo realicé en el lapso de 6 horas. Para realizar el testing de backend utilizaría las librerías `jest` y `supertest` para testear las funciones de validación implementadas en la carpeta `utils` y los distintos endpoints.

La manera que funciona el testeo de endpoints, utilizando el ORM, es utilizando el ambiente de testing junto a una base de datos de testing, donde se incorpora mock up data y se simulan requests a los diferentes endpoints con nueva información. De esta manera, se testea con información potencialmente deseada en base de datos y se le entrega información correcta, erronea y parcialmente correcta para testear los diferentes outputs.

Con un poco más de tiempo hubiese logrado el testing de backend sin problemas.
