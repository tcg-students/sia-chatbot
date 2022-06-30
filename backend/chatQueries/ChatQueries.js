const { fetchConn } = require("../database/Chat");

const getInitialTreeMessages = async () => {
  try {
    const connection = await fetchConn();
    let statementQuery = await connection.query("SELECT * FROM tree ;");
    console.log("statementQuery", statementQuery);

    return statementQuery;
  } catch (error) {
    console.log(error);
  }
};

const getInitialnodes = async (id) => {
  const connection = await fetchConn();
  try {
    let getInitialNodeQuery = await connection.query(
      `SELECT * FROM node WHERE node.tree_id=${id};`
    );
    console.log("getInitialNodeQuery", getInitialNodeQuery);
    return getInitialNodeQuery;
  } catch (error) {
    console.log(error);
  }
};

const getNode = async (id) => {
  const connection = await fetchConn();
  console.log("kskk", connection);
  try {
    let getNodeQuery = await connection.query(
      `SELECT * FROM node WHERE node_id=${id};`
    );
    console.log("getNodeQuery", getNodeQuery);
    return getNodeQuery;
  } catch (error) {
    console.log(error);
  }
};

const updateJsonTree = () => {
  
}

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
  getInitialnodes,
  // getNode,
};
