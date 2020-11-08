const test = require('./test');
const os = require('os');
const EventEmiter = require('events');

const emitter = new EventEmiter();

console.log(test.sumar());
// console.log(sumar.sumas());

console.log(test.sumare(4, 8));
console.log(test.multiplicar(3, 3));

console.log('Verison os', os.cpus());
console.log('Verison os', os.release());
console.log('Memoria libre', os.freemem());
console.log('Memoria total ', os.totalmem());

emitter.on('event', function(){
    console.log('Un evento a ocurrido....');
});

emitter.emit('event');

emitter.on('eventWithArguments', function(arg) {
  console.log("Eventen with args " + arg.id + ' ' + arg.numero);  
})

emitter.emit('eventWithArguments', {
    id: 1, 
    numero: 24
})

// Con array function.
emitter.on('eventArrow', (arg)  => {
  console.log("Eventen flecha with args " + arg.id + ' ' + arg.numero);  
})

emitter.emit('eventArrow', {
    id: 10, 
    numero: 240
})