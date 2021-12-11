/**
 * Es una conveccion que se refiere a servicios web por protocolo HTTP
Metodos:
Get: Obtener
Put: Modificar/Actualizar
Patch: Modificar/Actualizar
Post: Crear
Delete: Eliminar
Patch
El método de solicitud HTTP PATCH aplica modificaciones parciales a un recurso.

PATCH es algo análogo al concepto de “actualización” que se encuentra en CRUD, Una solicitud se considera un conjunto de instrucciones sobre cómo modificar un recurso. Contrasta esto con PUT; que es una representación completa de un recurso.PATCH

Mo es necesariamente idempotente, aunque puede serlo. Contrasta esto con PUT; que siempre es idempotente.

La palabra “idempotente” significa que cualquier número de solicitudes repetidas e idénticas dejará el recurso en el mismo estado.

Por ejemplo, si un campo de contador de incremento automático es una parte integral del recurso, entonces un PUT lo sobrescribirá naturalmente (ya que sobrescribe todo), pero no necesariamente para .PATCH

PATCH (como POST) puede tener efectos secundarios sobre otros recursos.
*/
/**
 * Convenios ya establecidos: poner en prural los endPoint.
 * api.example.com/task/{id}/
 * api.example.com/peable/{id}/
 * api.example.com/users/{id}/task/
 */
/**
 * Url para methodos api resful
 * https://medium.com/fullstacked/restful-api-cheat-sheet-3f96fab970b8https://medium.com/fullstacked/restful-api-cheat-sheet-3f96fab970b8
 */
/*
 * app.METHOD(PATH, HANDLER)
 * app => is an instance of express
 * Method => is an http request method
 * Patch =>  is a path on the server
 * Handler => is the function excecuted when the route is matched
 */
/**
 * Los middleware se deben definir despues del routing. Error comun hacerlo antes.
 * En el orden que se declaren así mismo se ejecutaran
 * Si el handler no tiene el next(), se detiene cortando la operación.
 */
const express = require('express')
const routerApi = require('./routes')
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')
const app = express() // Instance of express
const port = 3000

routerApi(app) // routing => enrutamiento
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)
app.listen(port, () => {
  console.log("El servidor corriendo en el puerto:" + port);
})