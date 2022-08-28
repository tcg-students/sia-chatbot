const { Pool } = require("pg");
require("dotenv").config();

// const username = process.env.DB_USERNAME;
// const host = process.env.DB_HOST
// const password = process.env.DB_PASSWORD;
// const siaChatbot = process.env.DB_NAME;
const {parse} = require('pg-connection-string')




// const pool = new Pool({
//   user: "nuviyoldpfvdvc",
//   host: "ec2-44-193-178-122.compute-1.amazonaws.com",
//   database: "dd5t0k997pi0d9",
//   password: "674966f4d4849a0e33fd1658043d44376cea9a66c02058870f455612d6752c2d",
//   port: 5432,
// });



// if (env === "production") {
  // connectionString = process.env.DATABASE_URL
  pool = new Pool({
    connectionString: 'postgres://kkwsyffoxkiafl:8d78eb2a00e746e3ad3c009782b530180c54c88d2bbefe3d8a57d98ac5926a89@ec2-3-223-242-224.compute-1.amazonaws.com:5432/d951fdf033kp5s',
    "dialect": "postgres",
    ssl: { rejectUnauthorized: false }
    // "dialectOptions": {
    //     "ssl": {
    //         "require": true,
    //         "rejectUnauthorized": false
    //     }
    // }
  })
// };

const getChats = async () => {
  const client = await pool.connect();
  console.log("client" , client)
  return client;
};

// console.log('pool', pool)

module.exports = {
  getChats,
};
