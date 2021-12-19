/**
 * Se va utilizando cada una de las fuciones y se van comantando las que nose están utilizando.
 * 
 */

const fs = require('fs')

// Lectura del archivo
function leer(ruta, cb){
  fs.readFile(ruta, (err, data)=>{
    cb(data.toString());
  })
}

// Escritura en el archivo, en el cual se declara a donde vamos a escribir.
function escribir(ruta, contenido, cb){
  fs.writeFile(ruta, contenido, function(err){
    if(err){
      console.error('No he podido escribirlo', err)
    }else{
      console.log('Se ha escrito correctamente')
    }
  })
}

// Borrar los archivos que vamos creando
function borrar(ruta, cb){
  fs.unlink(ruta, cb)
}

// leer(__dirname + '/archivo.txt', console.log)
// escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo')
borrar(__dirname + '/archivo1.txt', console.log)