const { Pool } = require("pg");
sslmode=require
require("dotenv").config();
const { parse } = require('pg-connection-string')


const config = parse(process.env.DATABASE_URL)

config.ssl = {
  rejectUnauthorized: false
}
const pool = new Pool(config)


console.log('pool', pool)

const getChats = async () => {
  const client = await pool.connect();
  console.log("client" , client)
  return client;
};



module.exports = {
  getChats,
};