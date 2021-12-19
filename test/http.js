const http = require('http');
const { Socket } = require('dgram');
// const server = http.createServer();
// server.on('connection', (Socket) => {
//     console.log("nueva conexion detectada");
// })
// server.listen(2012);
// console.log("Puerto 2012");

// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.write('Hola mundo');
//         res.write('Desde NodeJs');
//         res.end();
//     }

//     if (req.url === '/home') {
//        res.write('home')
//        res.end();
//     }
// });

// server.listen(3030);
// console.log('Escuchando puerto 3030');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hola desde el servidor node');
    res.write('<p>Esto me esta gustando</p>');
    res.statusCode(400).send('Bad Request')
    res.end();
}).listen(3030);