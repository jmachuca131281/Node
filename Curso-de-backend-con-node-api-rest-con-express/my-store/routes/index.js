const express = require('express')
const productsRouter = require('./products.router')
const usersRouter = require('./users.router')
const categoryRouter = require('./category.router')

function routerApi (app){
  const router = express.Router()
  app.use('/api/v1', router) // Controlla el versionamiento con un cambio único.
  router.use('/products', productsRouter),
  router.use('/users', usersRouter),
  router.use('/category', categoryRouter)
}

module.exports = routerApi