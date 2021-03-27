/** Async Await */

// Al agregar el async a la función se transformo en una promesa
// let getNombre = async() => { 
//     return 'Fernando';
// };

// Esta función es lo que está haciendo el async arriba.
let getNombre = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fernando");
    }, 3000);
  });
};

let saludo = async () => {
  let nombre = await getNombre();
  return `Hola ${nombre}`;
};

saludo().then((mensaje) => {
  console.log(mensaje);
});

// console.log(getNombre());
getNombre().then(nombre => { // LLamado a la función para verificar.
  console.log(nombre);
})
.catch(e => {
  console.log('Error de ASYNC', e);
});
