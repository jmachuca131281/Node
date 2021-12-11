const Joi = require('joi')
const id = Joi.string().uuid()
const firstName = Joi.string().min(1).max(30)
const lastName = Joi.string().min(1).max(30)

const getUserSchema = Joi.object({
  id: id.required()
})

const createUserSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required()
})

module.exports = {
  getUserSchema,
  createUserSchema
}