const ENV = require('../main/config/env')

module.exports = {
  username: ENV.DB_USERNAME,
  password: ENV.DB_PASSWORD,
  database: ENV.DB_DATABASE,
  host: ENV.DB_HOST,
  dialect: ENV.DB_DIALECT
}
