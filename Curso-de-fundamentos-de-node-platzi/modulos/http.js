const { resolveSoa } = require('dns');
const http = require('http')

http.createServer(function(req, res){
  console.log("Nuevao petición");
  console.log(req.url);
  res.writeHead(201,
    {'Content-Type': 'text/plain'
  })
  res.write('Hola, ya se usar http de NodeJS')
  res.end()
}).listen(3000)