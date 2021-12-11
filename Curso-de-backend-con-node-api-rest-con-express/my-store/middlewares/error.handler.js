/**
 *  Middleware: Es un software que asiste a una aplicación para interactuar o comunicarse con otras
 *  aplicaciones, software, redes, hardware y/o sistemas operativos. Esto simplifica el trabajo de los
 *  programadores en la compleja tarea de generar las conexiones que son necesarias en los sistemas
 *  distribuidos.
 */
function logErrors (err, req, res, next){
  console.error(err)
  next(err)
}

function errorHandler (err, req, res, next){
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

function boomErrorHandler (err, req, res, next){
  if(err.isBoom){
    const {output} = err
    res.status(output.statusCode).json(output.payload)
  }
  next(err)
}

module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler
}