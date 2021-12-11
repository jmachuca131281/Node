/**
 * https://nodejs.org/api/stream.html#stream_writable_streams
 * https://nodejs.org/api/stream.html#stream_readable_streams
 * 
 * Los Readable y Writeable streams tienen los siguientes eventos y funciones respectivamente:

Readable
Eventos
data. Se dispara cuando recibe datos.
end. Se dispara cuando termina de recibir datos.
error. Se dispara cuando hay un error.
Funciones
pipe
unpipe
read
push
Writeable
Eventos
drain. Se dispara cuando emite datos.
finish. Se dispara cuando termina de emitir.
error. Se dispara cuando hay un error.
Funciones
write
end
Recuerda que tienen estos eventos porque los heredan de la clase EventEmitter.
 */

const { Writable } = require("stream");

const writableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});

process.stdin.pipe(writableStream);