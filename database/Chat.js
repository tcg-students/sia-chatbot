var mysql = require('mysql');
require('dotenv').confiq()

const username = process.env.MY_USERNAME
const password = process.env.MY_PASSWORD
const siaChatbot = process.env.MY_CHATBOT



var db = mysql.createConnection({
  host: 'localhost',
  user: username,
  password: password,
  database: siaChatbot
  // port: '3325'
})

db.connect(function(err){
  if(err)throw err;
  console.log('"Database Connected.')
})

module.exports = db;
