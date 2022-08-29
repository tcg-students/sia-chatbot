const { Pool } = require("pg");
require("dotenv").config();

// const username = process.env.DB_USERNAME;
// const host = process.env.DB_HOST
// const password = process.env.DB_PASSWORD;
// const siaChatbot = process.env.DB_NAME;


// const pool = new Pool({
//   user: "nuviyoldpfvdvc",
//   host: "ec2-44-193-178-122.compute-1.amazonaws.com",
//   database: "dd5t0k997pi0d9",
//   password: "674966f4d4849a0e33fd1658043d44376cea9a66c02058870f455612d6752c2d",
//   port: 5432,
// });
var connectionString = null;
if (env === "production") {
  connectionString = process.env.DATABASE_URL
  pool = new Pool({
    connectionString: connectionString,
  })
};

//



const getChats = async () => {
  const client = await pool.connect();
  console.log("client" , client)
  return client;
};

// console.log('pool', pool)

module.exports = {
  getChats,
};