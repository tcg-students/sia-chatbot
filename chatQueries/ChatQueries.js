const { db } = require("../database/Chat");

// console.log('dsfdf',db)
const getInitialTreeMessages = async () => {
  const connection = await db.getConnection();
  try {
    let statementQuery = await connection.query("SELECT * FROM tree ;");

    return statementQuery;
  } catch (error) {
    console.log(error);
  }
};

const getNodeMessages = async (id) => {
  const connection = await db.getConnection();
  try {
    let getNodeQuery = await connection.query(`SELECT * FROM node WHERE node.tree_id=${id};`
    );
    console.log("getNodeQuery", getNodeQuery);
    return getNodeQuery;
  } catch (error) {
    console.log(error);
  }
};

// const saveStudent = async (data) => {
//   const {
//     jsonFile
//   } = data;
//   const connection = await db.getConnection();
//   try {
//     let applicantQuery = await connection.query(
//       `INSERT INTO node (json_file) VALUES ('${nodeId}');`
//     );
//     console.log('applicantQuery', applicantQuery)
//     return applicantQuery;
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = {
  getInitialTreeMessages,
  getNodeMessages,
};
