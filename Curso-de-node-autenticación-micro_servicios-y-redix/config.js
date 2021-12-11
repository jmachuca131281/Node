/**
 * La configuración de la variable de entorno, indica si existe, no se modifique. si no existe se crea con el valor determinado.
 * Por convención, el nombre de la varible se escribe en mayúscula y los valores son cadenas de texto.
 * 
 * Configuraciones:
 * Se crea en en la ruta general el archivo config.js, en este lugar se alojaran las variables de entorno.
 */
module.exports = {
  api:{
    port: process.env.API_PORT || 3000,
  }
}