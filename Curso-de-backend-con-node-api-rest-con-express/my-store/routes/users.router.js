const express = require('express')
const router = express.Router()
const UsersServices = require('./../services/users.service')
const service = new UsersServices()
const validatorHandler = require('./../middlewares/validator.handler')
const {  getUserSchema, createUserSchema } = require('./../schemas/user.schema')

router.get('/', async (req, res) => {
  const users = await service.find()
  res.json(users)
})

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const user = await service.findOne(id)
      res.json(user)
    } catch (error) {
      next(error)
    }
  }
)

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res)=>{
    const body = req.body
    const newUser = await service.create(body)
    res.status(201).json(newUser)
  }
)

router.delete('/:id', async(req, res)=>{
  const {id} = req.params
  const rta = await service.delete(id)
  res.json(rta)
})

module.exports = router