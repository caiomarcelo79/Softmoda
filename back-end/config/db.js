const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  dialectModule: require('mysql2'),
})

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}