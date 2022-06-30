var mariadb = require("mariadb");
require("dotenv").config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const siaChatbot = process.env.DB_NAME;
console.log("username: ", username);
console.log("password: ", password);
console.log("siaChatbot: ", siaChatbot);
var db = mariadb.createPool({
  host: "localhost",
  user: username,
  password: password,
  database: siaChatbot
});

module.exports = { db };
