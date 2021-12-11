const faker = require('faker')
const boom = require('@hapi/boom')

class UsersService {
  constructor() {
    this.users = []
    this.generate()
  }

  generate() {
    const limit = 50
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName()
      });
    }
  }

  find() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.users)
      }, 1000)
    })
  }

  async findOne(id){
    const user = this.users.find(item=>item.id === id)
    if(!user){
      throw boom.notFound('product not found')
    }
    return user
  }

  async create (data){
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser)
    console.log("Nuevo usuario: " + newUser);
    return newUser
  }

  async delete(id){
    const index = this.users.findIndex(item=>item.id === id)
    if(index === -1){
      throw boom.notFound('product not found')
    }
    this.users.splice(index, 1)
    return {id}
  }
}

module.exports = UsersService