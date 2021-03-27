const argv = require('./config/yargs').argv;

// Desestructurar el crearAchivo que es exportado de multiplicar.
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// console.log(argv);
let comando = argv._[0];

switch (comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite);  
    break;
  case 'crear':
    // console.log('crear'); 
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado: ${archivo}`))
      .catch(e=>console.log(e));
    break;
  default:
    console.log('Comando no reconocido');
}


// let base = 'adb';

// console.log(process.argv);
// let argv2 = process.argv;
// console.log(argv.base);
// console.log('Limite', argv.limite);
// let parametro = argv[2];
// let base = parametro.split('=')[1]; // Se separa el string para tomar el número, y split convierte el string en un array.

// console.log(parametro);
// console.log(base); // Se comenta por que esta funcionando correctamente

// crearArchivo(base)
//   .then(archivo => console.log(`Archivo creado: ${archivo}`))
//   .catch(e=>console.log(e));