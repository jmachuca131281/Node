const faker = require('faker')
const boom = require('@hapi/boom')

class CategoryService {
  constructor() {
    this.categoryList = []
    this.generate()
  }

  generate() {
    const limit = 30
    for (let index = 0; index < limit; index++) {
      this.categoryList.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName()
      })
    }
    // console.log(this.categoryList);
  }

  find() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.categoryList)
      }, 2000)
    })
  }

  async findOne(id) {
    const category = this.categoryList.find(item => item.id === id)
    if (!category) {
      throw boom.notFound('product not found')
    }
    return category
  }

  async create(data) {
    const newCategory = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.categoryList.push(newCategory)
    return newCategory
  }

  async update(id, changes) {
    const index = this.categoryList.findIndex(item => item.id === id)
    if (index === -1) throw boom.notFound('producto not found')
    const category = this.categoryList[index]
    this.categoryList[index] = {
      ...category,
      ...changes
    }
    return this.categoryList[index]
  }

  async delete (id){
    const index = this.categoryList.findIndex(item=>item.id===id)
    if(index === -1){
      throw boom.notFound('product not found')
    }
    this.categoryList.splice(index, 1)
    return {id}
  }
}

module.exports = CategoryService