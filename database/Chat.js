var mariadb = require("mariadb");
require("dotenv").config();

const username = process.env.MY_USERNAME;
const password = process.env.MY_PASSWORD;
const siaChatbot = process.env.MY_CHATBOT;
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
