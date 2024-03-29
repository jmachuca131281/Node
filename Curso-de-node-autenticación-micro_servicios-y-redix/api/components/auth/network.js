const response = require('../../../network/response')
const Controller = require('./index')
const express = require('express')
const router = express.Router()

router.post('/login', function(req, res){
  Controller.login(req.body.username, req.body.password)
  .then(token=>{
    response.success(req, res, token, 200)
  })
  .catch(e=>{
    response.error(req, res, 'Información invalida', 400)
  })
})

module.exports = router