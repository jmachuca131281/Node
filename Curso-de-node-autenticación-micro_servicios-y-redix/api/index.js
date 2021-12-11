const user = require('./components/user/network')
const bodyParser = require('body-parser')
const config = require('../config.js')
const express = require('express')
const app = express()

app.use(bodyParser.json())

// Router
app.use('/api/user', user)
app.listen(config.api.port, ()=>{
  console.log('Api escuchando en el puerto ', config.api.port);
})