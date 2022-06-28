const {
  getInitialTreeMessages,
  getInitialnodes,
  getNode,
} = require("../chatQueries/ChatQueries");

const chatRoutes = (app) => {
  app.get("/treeMessages", async (req, res) => {
    const treeMessages = await getInitialTreeMessages();
    console.log("first");
    res.send({ message: "All tree messages", treeMessages });
  });

  app.get("/get_initial_nodes/:id", async (req, res) => {
    const getInitialNodes = await getInitialnodes(req.params.id);
    console.log("req.params", req.params);
    res.send(getInitialNodes);
  });

  app.get("/get_nodes/:id", async (req, res) => {
    const getNodes = await getNode([req.params.id]);
    console.log("getNodes", getNodes);
    res.send(getNodes);
  });
};

module.exports = {
  chatRoutes,
};
