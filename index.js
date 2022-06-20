const express = require('express')
const app = express()
const port = 4000
const {chatRoutes} = require('./routes/ChatRoutes')

app.use(express.json())
chatRoutes(app)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))