// Callback mas sencillo que ahí... función que recibe otra función en su interior
setTimeout(() => {
  console.log("Hola Mundo");
}, 3000);

setTimeout(function () {
  console.log("Esta es una prueba de Callback con función");
}, 3000);

let getUsuarioById = (id, callback) => {
  let usuario = {
    nombre: "Fernando",
    // id: id, // En ES6 es redundante poner el atributo con el mismo nombre.
    id
  };

  if (id === 20) {
    callback(`El usuario con id ${id}, no existe en la BD`); // Callback, llamado de la función.
  } else {
    callback(null, usuario);
  }
};

getUsuarioById(1, (err, usuario) => { // Comun en node. Comunmente el primer parametro es el error
  if (err) {
    return console.log(err);
  }
  console.log("Usuario de base de datos", usuario); // Despues de la concatenación con coma es agregar otro elemento
});


// Examples of developer.mozilla.org.
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of rutine or action.
// function greeting(name) {
//   alert("Hello " + name);
// }

// function processUserInput(callback) {
//   var name = prompt("Please enter your name.");
//   callback(name);
// }

// processUserInput(greeting);
