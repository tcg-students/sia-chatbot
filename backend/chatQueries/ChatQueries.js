const { fetchConn } = require("../database/Chat");

const getTcgLogo = async () => {
  try {
    const connection = await fetchConn();
    let statementQuery =
      await connection.query(`SELECT * FROM node WHERE id = ${1};
    `);
    console.log("statementQuery", statementQuery);

    return statementQuery;
  } catch (error) {
    console.log(error);
  }
};

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

const getInitialnodes = async (obj) => {
  const connection = await fetchConn();
  const { treeid, nodeid } = obj;
  let req =
    treeid != undefined ? `node.tree_id=${treeid}` : "node.node_id=" + nodeid;
  try {
    let query = `SELECT * FROM node WHERE ${req};`;
    console.log('query', query)
    let getInitialNodeQuery = await connection.query(query);
    console.log("getInitialNodeQuery", getInitialNodeQuery);
    return getInitialNodeQuery;
  } catch (error) {
    console.log(error);
  }
};

// const getNode = async (id) => {
//   const connection = await fetchConn();
//   console.log("kskk", connection);
//   try {
//     let getNodeQuery = await connection.query(
//       `SELECT * FROM node WHERE node.node_id=${id};`
//     );
//     console.log("getNodeQuery", getNodeQuery);
//     return getNodeQuery;
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = {
  getTcgLogo,
  getInitialTreeMessages,
  getInitialnodes,
  // getNode,
};
