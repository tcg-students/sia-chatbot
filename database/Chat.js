const { Pool } = require("pg");
require("dotenv").config();

const username = process.env.DB_USERNAME;
const host = process.env.DB_HOST
const password = process.env.DB_PASSWORD;
const siaChatbot = process.env.DB_NAME;




const pool = new Pool({
  user: username,
  host: host,
  database: siaChatbot,
  password: password,
  port: 5432,
});

const getChats = async () => {
  const client = await pool.connect();
  return client;
};

// console.log('pool', pool)

module.exports = {
  getChats,
};

