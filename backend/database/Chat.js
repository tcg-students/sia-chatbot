var mariadb = require("mariadb");
require("dotenv").config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const siaChatbot = process.env.DB_NAME;

var db = mariadb.createPool({
  host: "localhost",
  user: username,
  password: password,
  database: siaChatbot,
  // limitNOFILE : Infinity
});

async function fetchConn() {
  let conn = await db.getConnection();
  conn.release();
  return conn;
}

module.exports = { fetchConn };
