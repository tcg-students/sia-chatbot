const {
  getTcgLogo,
  insertAllNodes,
  getInitialTreeMessages,
  getInitialnodes,
  getNode,
  createTree,
  createSingeNode,
} = require("../chatQueries/ChatQueries");

const chatRoutes = (app) => {
  // app.get("/logo", async (req, res) => {
  //   const logo = await getTcgLogo();
  //   res.send({ logo });
  // });

  app.get("/treeMessages", async (req, res) => {
    try {
      const treeMessages = await getInitialTreeMessages();
      console.log("treeMessages", treeMessages);
      res.send({ treeMessages });
    } catch (error) {
      res.send({error, messsage:"gfdgfdgdfgdfgdf"});
    }
  });

  app.post("/get_initial_nodes", async (req, res) => {
    const idObj = req.body;
    console.log("idObj", idObj);
    const getInitialNodes = await getInitialnodes(idObj);
    res.send(getInitialNodes);
  });

  app.post("/node/:treename", async (req, res) => {
    const nodes = req.body;
    console.log("nodes", nodes);
    console.log("nodes", nodes);

    const treeId = await createTree(req.params.treename);
    console.log("treeId", treeId);
    insertAllNodes(nodes, treeId);
    console.log("insertAllNodes", insertAllNodes);
    // res.send({treeId ,insertAllNodes}).status(201);
  });
};

module.exports = {
  chatRoutes,
};
