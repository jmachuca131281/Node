// Requireds
const { rejects } = require('assert');
const fs = require('fs');
// const fs = require('Librerias externas, npm');
// const fs = require('./fs'); // Archivos creados pora la aplicación.

// Tarea
let listarTabla = (base, limite) => {
  for (let i = 0; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
  }
}

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if(!Number(base)){
      reject(`El valor introducido ${base} no es un número`)
      return;
    }
    let data = '';
    for(let i = 1; i <= limite; i++){
      // console.log("2 * " + i + " = " + i * 2);
      data += `${base} * ${i} = ${base * i}\n`;
    }
    /** Ejemplo original
     * const data = new Uint8Array(Buffer.from('Hello Node.js'));
    fs.writeFile('message.txt', data, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
    */
    
    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
      if(err) reject(err);
      else resolve(`table-${base}-al-${limite}.txt`);
      // console.log(`El archivo tabla-${base}.txt ha sido creado`);
    });
  });
}

module.exports = {
  crearArchivo,
  listarTabla
}

