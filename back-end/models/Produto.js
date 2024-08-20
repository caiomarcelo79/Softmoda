const db = require('../config/db')

const Produto = db.sequelize.define('produtos', {
  nome: {
    type: db.Sequelize.STRING,
    allowNUll: false,
    unique: true
  },
  valor: {
    type: db.Sequelize.FLOAT,
    allowNUll: false
  },
  quantidade: {
    type: db.Sequelize.INTEGER,
    allowNUll: false
  }
})

Produto.associate = (models) => {
  Produto.hasMany(models.Venda, {
    foreingKey: 'nome_produto',
    as: 'vendas'
  })
}

try {
  const resultado = Produto.sync()
  console.log(resultado)
} catch (error) {
  console.log(error)
}

module.exports = Produto