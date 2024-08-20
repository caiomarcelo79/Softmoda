const db = require('../config/db')

const Cliente = db.sequelize.define('clientes', {
  nome: {
    type: db.Sequelize.STRING,
    allowNUll: false
  },
  email: {
    type: db.Sequelize.STRING,
    allowNUll: false,
    unique: true
  },
  cpf: {
    type: db.Sequelize.STRING,
    allowNUll: false,
    unique: true
  },
  data_nascimento: {
    type: db.Sequelize.DATE,
    allowNUll: false
  },
  telefone: {
    type: db.Sequelize.STRING
  }
})

Cliente.associate = (models) => {
  Cliente.hasMany(models.Venda, {
    foreingKey: 'cpf_cliente',
    as: 'vendas'
  })
}

try {
  const resultado = Cliente.sync()
  console.log(resultado)
} catch (error) {
  console.log(error)
}

module.exports = Cliente