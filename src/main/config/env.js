require('dotenv').config()

const ENV = {
  DB_DATABASE: process.env.DB_DATABASE,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  PORT: process.env.PORT
}

module.exports = ENV
