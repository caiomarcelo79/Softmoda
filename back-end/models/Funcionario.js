const db = require('../config/db')

const Funcionario = db.sequelize.define('funcionarios', {
  nome: {
    type: db.Sequelize.STRING,
    allowNUll: false,
  },
  cpf: {
    type: db.Sequelize.STRING,
    allowNUll: false,
    unique: true
  },
  cargo: {
    type: db.Sequelize.STRING,
    allowNUll: false
  },
  salario: {
    type: db.Sequelize.FLOAT,
    allowNUll: false
  },
  telefone: {
    type: db.Sequelize.STRING
  }
})

Funcionario.associate = (models) => {
  Funcionario.hasMany(models.Venda, {
    foreingKey: 'cpf_funcionario',
    as: 'vendas'
  })
}

try {
  const resultado = Produto.sync()
  console.log(resultado)
} catch (error) {
  console.log(error)
}

module.exports = Funcionario