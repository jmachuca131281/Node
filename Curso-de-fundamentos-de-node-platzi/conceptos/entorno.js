/**
 * Las varibales de entorno por convenio se declaran en mayúscula.
 * Con las barras || declaramos el valor por defecto.
 * En el caso que la variable tenga dos palabras se definen con guión bajo ej: "MI_WEB"
 */
let nombre = process.env.NOMBRE || 'Este es el valor por defecto'
console.log("Hola "+ nombre);