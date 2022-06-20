var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'muano',
  password: 'mutondi',
  database: 'chatbot'
  // port: '3325'
})

db.connect(function(err){
  if(err)throw err;
  console.log('"Database Connected.')
})

module.exports = db;
