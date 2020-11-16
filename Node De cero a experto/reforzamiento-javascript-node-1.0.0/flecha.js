// function sumar(a, b) {
//     return a + b;
// }

// let sumar = (a, b) => a + b;

// function saludar() {
//     return 'Hola Mundo';
// }

// let saludar = () => 'Hola mundo';

// function saludar(nombre) {
//     return `Hola ${ nombre }`;
// }

// let saludar = (nombre) => `Hola ${ nombre }`

// console.log(saludar('Fernando'));

// console.log(sumar(10, 20));


let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder}`
    }
};

console.log(deadpool.getNombre());

let saludo = () => saludo(); 
saludo();

function saludar(nombre){
    return `Hola ${nombre}`
}

// Ejemplo de función flecha con argumento
let saludar = nombre => `Hola ${nombre}`;

// Es posible utilizar el argumento dentro de parentesis.
let saludarConParentesis = (nombreConParentesis) => `Hola con parentesis ${nombreConParentesis}`;

// Caracterirstica principal de una función de flecha es que el valor del "this" apunta al valor (del obj. this) fuera de la función 
let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: () => {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder}`
    }
};


