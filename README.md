# Prueba Técnica: Sección 3 item 10 (Implementar endpoint)

Para el desarrollo de la prueba se optó por utilizar el framework nest https://nestjs.com/ el cual está construido sobre express. Este brinda un motor de inyección de dependencia el cual permite  construir soluciones con mejores practicas de desarrollo.

## Desarrollo de la API-REST
Para el desarrollo de la API-REST se utilizó una arquitectura de tres capas:
- controller
- persistence
- services

Se construyó el endpoint POST: api/v1/user el cual permite el registro de usuarios en el sistema. El endpoint recibe en el cuerpo de la solictud un documento JSON el cual será validado por el servidor y posteriormente lo persistirá en una base de datos Postgres.

!["request"](/assets/postman.png)

### Validacion de los datos
El servidor mediante la libreria de class-validator realiza la validacion de cada uno de los campos ingresados antes de realizar la presistencia.

1. El campo name y lastname de ser  de tipo string, tener por lo menos un caracter y no supera la maxima longitud permitida de 16 caracteres.

2. El campo email se validrá de tenga un formato de correo electrónico valido.

3. El campo phone deberá tener un formato de número telefonico valido.

Si alguna de la validaciones falla el servidor cancelará la solicitud y responderá al cliente con un código 400 (Bad Request) indicando el o los campo errados.

!["bad-reuest"](/assets/bad-request.png)

### Persistencia  de los datos
Para esta tarea se implementó la base de datos Postgres. el servidor se conectó a esta utilizando el ORM TypeORM.

!["data-base"](/assets/database.png)

Se utilizó repository como patrón para la persistencia de los datos y desacoplar lógica de dominio de los detalles de la base de datos.

## Deployment del proyecto.
Para el despliegue del proyecto seguir los siguientes pasos:

1. Clonar el repositorio.

```shell script
git clone https://github.com/asuridev/user-register.git
```
2. Ingresar a la raíz del proyecto.

```shell script
cd user-register
```
3. Ejecutar docker-compose

```shell script
docker-compose up --build
```
Este ultimo comando construirá un cluster de docker-compose con dos contenedores, uno para el servidor y otro para la base de datos de postgreSQL.

## Verificando el funcionaminto del proyecto.

### Validación del endpoint
La API-REST expone el endpoint en el puerto 3000, en la url:

```
localhost:3000/api/v1/user
```

Mediante una solicitud POST con los campos requeridos registrará un usuario en la base de datos.
```
{
    "name":"Maria",
    "lastname": "Perez",
    "email": "mariaperez@gmail.com",
    "phone":"3225103144"
}
```
> **_NOTA:_**  Ver la documentación del enpoint publicada en el siguinte enlace: https://documenter.getpostman.com/view/19057359/2sAYX2Miw6

### Consulta de la Base de datos.
Luego de ingresar varios registros de forma exitosa a traves del endpoint, se puede realizar la conexión a la base de datos para verificar la persistencia de los mismos.

El cluster de docker-compose expone el puerto **5432** para permitir la conexión mediante un cliente gráfico de Postgres.

Parametros de conexion de la base de datos

```
host: localhost
port: 5432
database: database
user: user
password: secret
```