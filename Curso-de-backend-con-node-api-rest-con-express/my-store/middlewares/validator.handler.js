/**
 * La inforamción puede llegar de varias formas.
 * post: req.body
 * get: req.params o req.query *
 */
 const boom = require('@hapi/boom');

 function validatorHandler(schema, property) {
   return (req, res, next) => {
     const data = req[property];
     const { error } = schema.validate(data, {
       abortEarly: false
     });
     if (error) {
       next(boom.badRequest(error));
     }
     next();
   }
 }
 
 module.exports = validatorHandler;