const db = require('../config/db')

const Fornecedor = db.sequelize.define('fornecedores', {
  cnpj: {
    type: db.Sequelize.STRING,
    allowNUll: false,
    unique: true
  },
  razao_social: {
    type: db.Sequelize.STRING,
    allowNUll: false
  },
  fantasia: {
    type: db.Sequelize.STRING,
    allowNUll: false
  },
  endereco: {
    type: db.Sequelize.STRING,
    allowNUll: false
  }
})

try {
  const resultado = Fornecedor.sync()
  console.log(resultado)
} catch (error) {
  console.log(error)
}

module.exports = Fornecedor