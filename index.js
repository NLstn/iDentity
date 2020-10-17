const express = require('express')
const app = express()
const port = 3000

const helmet = require('helmet')

const mainRouter = require('./src/middlewares/mainrouter')

app.use(helmet())

app.use('/api/v1', mainRouter);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})