const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router()

app.use(bodyParser.json())

module.exports = {
  app,
  router
}
