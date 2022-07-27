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

const createSingeNode = async (node) => {
  try {
    console.log("node", node);
    const connection = await fetchConn();
    let statementQuery = await connection.query(
      `INSERT INTO node (text, option, image, tree_id , node_id , application)
    VALUES (?,?,?,?,?,?);`,
      Object.values(node)
    );
    return statementQuery.insertId;
  } catch (error) {
    console.log(error);
  }
};

const createTree = async (text) => {
  const tree = { text };
  try {
    const connection = await fetchConn();
    let statementQuery = await connection.query(
      `INSERT INTO tree (text) values (?);`,
      Object.values(tree)
    );
    console.log("statementQuery", statementQuery);

    return statementQuery.insertId;
  } catch (error) {
    console.log(error);
  }
};

const insertAllNodes = async (nodes, treeId) => {
  for (var i in nodes) {
    var firstNodeId = await createSingeNode({
      text: nodes[i].text,
      option: nodes[i].option,
      image: nodes[i].image,
      treeId: parseInt(treeId),
      nodeId: null,
      application: null,
    });

    for (var j in nodes[i].link) {
      var secondNodeId = await createSingeNode({
        text: nodes[i].link[j].text,
        option: nodes[i].link[j].option,
        image: nodes[i].link[j].image,
        treeId: null,
        nodeId: parseInt(firstNodeId),
        application: null,
      });

      for (var c in nodes[i].link[j].link) {
        var thirdNodeId = await createSingeNode({
          text: nodes[i].link[j].link[c].text,
          option: nodes[i].link[j].link[c].option,
          image: nodes[i].link[j].link[c].image,
          treeId: null,
          nodeId: parseInt(secondNodeId),
          application: null,
        });

        for (var b in nodes[i].link[j].link[c].link) {
          var fourNodeId = await createSingeNode({
            text: nodes[i].link[j].link[c].link[b].text,
            option: nodes[i].link[j].link[c].link[b].option,
            image: nodes[i].link[j].link[c].link[b].image,
            treeId: null,
            nodeId: parseInt(thirdNodeId),
            application: null,
          });
        }
      }
    }
  }
};

const getInitialnodes = async (obj) => {
  const connection = await fetchConn();
  const { treeid, nodeid } = obj;
  let req =
    treeid != undefined ? `node.tree_id=${treeid}` : "node.node_id=" + nodeid;
  try {
    let query = `SELECT * FROM node WHERE ${req};`;
    console.log("query", query);
    let getInitialNodeQuery = await connection.query(query);
    console.log("getInitialNodeQuery", getInitialNodeQuery);
    return getInitialNodeQuery;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTcgLogo,
  getInitialTreeMessages,
  getInitialnodes,
  createSingeNode,
  createTree,
  insertAllNodes,
  // getNode,
};
