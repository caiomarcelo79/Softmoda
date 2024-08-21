const db = require('../config/db')

const Venda = db.sequelize.define('vendas', {
  nome_produto: {
    type: db.Sequelize.STRING,
    allowNUll: false,
    references: {
      model: 'produtos',
      key: 'nome'
    }
  },
  cpf_cliente: {
    type: db.Sequelize.STRING,
    allowNUll: false,
    references: {
      model: 'clientes',
      key: 'cpf'
    }
  },
  cpf_funcionario: {
    type: db.Sequelize.STRING,
    allowNUll: false,
    references: {
      model: 'funcionarios',
      key: 'cpf'
    }
  },
  nome_promocao: {
    type: db.Sequelize.STRING,
    references: {
      model: 'promocoes',
      key: 'nome'
    }
  },
  forma_pagamento: {
    type: db.Sequelize.STRING,
    allowNUll: false
  },
  valor_compra: {
    type: db.Sequelize.STRING
  },
  data_compra: {
    type: db.Sequelize.DATE
  }
})

Venda.associate = (models) => {
  Venda.belongsTo(models.Produto, {
    foreingKey: 'nome_produto',
    as: 'produto'
  })
}

Venda.associate = (models) => {
  Venda.belongsTo(models.Cliente, {
    foreingKey: 'cpf_cliente',
    as: 'cliente'
  })
}

Venda.associate = (models) => {
  Venda.belongsTo(models.Funcionario, {
    foreingKey: 'cpf_funcionario',
    as: 'funcionario'
  })
}

Venda.associate = (models) => {
  Venda.belongsTo(models.Promocao, {
    foreingKey: 'nome_promocao',
    as: 'promocao'
  })
}

try {
  const resultado = Venda.sync()
  console.log(resultado)
} catch (error) {
  console.log(error)
}

module.exports = Venda