var mariadb = require("mariadb");
require("dotenv").config();

const username = process.env.MY_USERNAME;
const password = process.env.MY_PASSWORD;
const siaChatbot = process.env.MY_CHATBOT;

var db = mariadb.createPool({
  host: "localhost",
  user: username,
  password: password,
  database: siaChatbot,
});

module.exports = { db };
