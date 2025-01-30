# Prueba Técnica: Sección 3 item 10 (Implementar endpoint)

Para el desarrollo de la prueba se optó por utilizar el framework nest https://nestjs.com/ el cual está construido sobre express. Este brinda un motor de inyección de dependencia el cual permite  construir soluciones con mejores practicas de desarrollo.

## Desarrollo de la API-REST
Para el desarrollo de la API-REST se utilizó una arquitectura de tres capas:
- controller
- persistence
- services

Se construyó el endpoint POST: api/v1/user el cual permite el registro de usuarios en el sistema. El endpoint recibe en el cuerpo de la solictud un documento JSON el cual será validado por el servidor y posteriormente lo persistirá en una base de datos Postgres.

!["request"](/assets/postman.png)

> **_NOTA:_**  Ver la documentación del enpoint publicada en el siguinte enlace: https://documenter.getpostman.com/view/19057359/2sAYX2Miw6

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

## Verificando el funcionaminto del proyecto.