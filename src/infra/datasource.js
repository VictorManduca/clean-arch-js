const { Sequelize } = require('sequelize')

const ENV = require('../main/config/env')

const datasource = new Sequelize(
  ENV.DB_DATABASE,
  ENV.DB_USERNAME,
  ENV.DB_PASSWORD,
  {
    host: ENV.DB_HOST,
    dialect: 'postgres'
  }
)

module.exports = datasource
