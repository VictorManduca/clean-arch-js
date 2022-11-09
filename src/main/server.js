const { app } = require('./config/app')
const env = require('./config/env')
const routes = require('../main/routes/routes')

app.use(routes)

app
  .listen(env.PORT, () => console.log(`Running on port ${env.PORT}`))
  .on('error', error => console.error(`on error handler: ${error}`))

process.on('uncaughtException', error => console.error(`process.on handler: ${error}`))
