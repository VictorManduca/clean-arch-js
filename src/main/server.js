const { app } = require('./config/app')
const env = require('./config/env')
const routes = require('../main/routes/routes')

app.use(routes)

app.listen(env.PORT, () => console.log(`Running on port ${env.PORT}`))
