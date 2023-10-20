# Typescript N1

This repo is to store all the codes created within the Typescript N1 course.

## How to install

- Make sure you have Node js installed [click here to go to download page](https://nodejs.org/es).

- Run `npm i` to install packages.

- Run `npm start` within terminal to start the program.

## Language

Typescript

```ts
const codeExample = () => {
    return 'Hello world';
}
```


Verbos http: 

GET: Obtiene infomacion sobre uno o varios recurso que se requiera
POST: Crea uno o varios recursos dentro de el sistema de destino (BD, gestor de logs, etc)
PATCH: Modifica parcialmente un recurso
PUT: Modifica totalmente un recurso
DELETE: Elimina uno o varios recursos

codigos de estado:
1xx: codigos informativos
2xx: codigos que representan el exito de una operacion
3xx: indica redirecciones
4xx: errores de cliente
5xx: errores de servidor

url:
https://jsonplaceholder.org/posts

parametros:
query params: aquellos que se anexan a la url:
?nombreparametro=valorParametro&siguienteParametro=valorParametro

GET:
https://jsonplaceholder.org/posts?nombreparametro=valorParametro&siguienteParametro=valorParametro
url params:
/{id}
https://jsonplaceholder.org/posts/valorParametro

POST/PUT/PATHC/DELETE ...
body: JSON (raw)

headers (encabezados):
contienen informacion de parametrizacion como tipo de contenido, autorizacion, etc