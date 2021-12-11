const express = require('express')
const validatorHandler = require('../middlewares/validator.handler')
const { createCategorySchema, getCategorySchema, updateCategorySchema } = require('../schemas/category.schame')
const router = express.Router()
const CategoryService = require('./../services/category.service')
const service = new CategoryService()
//const { getCategorySchema} = require('./../schemas/category.shema')

router.get('/', async (req, res) => {
  const category = await service.find()
  res.json(category)
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const category = await service.findOne(id)
    res.json(category)
  } catch (e) {
    next(e)
  }
})

router.post('/',
  validatorHandler(createCategorySchema, 'body'),
  async (req, res) => {
    const body = req.body
    const newCategory = await service.create(body)
    res.status(201).json(newCategory)
  })

router.patch('/:id', 
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next)=>{
    try {
      const {id} = req.params
      const body = req.body
      const category = await service.update(id, body)
      res.json(category)
    } catch (error) {
      next(error)
    }
  })

router.delete('/:id', async (req, res) => {
  const {id} = req.params
  const rta = await service.delete(id)
  res.json(rta)
})

module.exports = router