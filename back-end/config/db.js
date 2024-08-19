const Sequelize = require('sequelize')

const sequelize = new Sequelize('softmoda', 'root', 'senha123', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}