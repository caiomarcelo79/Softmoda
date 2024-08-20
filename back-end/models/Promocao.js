const db = require('../config/db')

const Promocao = db.sequelize.define('promocoes', {
  nome: {
    type: db.Sequelize.STRING,
    allowNUll: false,
    unique: true
  },
  desconto: {
    type: db.Sequelize.INTEGER,
    allowNUll: false
  },
  condicoes: {
    type: db.Sequelize.STRING,
    allowNUll: false
  },
  validade: {
    type: db.Sequelize.DATE,
    allowNUll: false
  }
})

Promocao.associate = (models) => {
  Promocao.hasMany(models.Venda, {
    foreingKey: 'nome_promocao',
    as: 'vendas'
  })
}

try {
  const resultado = Promocao.sync()
  console.log(resultado)
} catch (error) {
  console.log(error)
}

module.exports = Promocao