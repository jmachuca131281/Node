const express = require('express')
const app = express()

// Cramos una ruta
app.get('/', function(req, res, next){
  res.send("Hello world")
})

const server = app.listen(8000, function(){
  console.log(`Listening http://localhost:${server.address().port}`);
})