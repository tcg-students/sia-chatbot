const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path');

const port = process.env.PORT
const cors = require('cors')
const {chatRoutes} = require('./routes/ChatRoutes')

app.use(express.json())
app.use(cors())

app.use('/public', express.static('public'))

app.get('/app', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/build/index.html'));
  });
// sendFile will go here
app.get('/script.js', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/build/static/js/main.9c91190a.js'));
});
chatRoutes(app)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))