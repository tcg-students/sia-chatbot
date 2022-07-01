const {
  getTcgLogo,
  getInitialTreeMessages,
  getInitialnodes,
  getNode,
} = require("../chatQueries/ChatQueries");

const chatRoutes = (app) => {

  app.get("/logo", async (req, res) => {
    const logo = await getTcgLogo();
    res.send({ logo });
  });

  app.get("/treeMessages", async (req, res) => {
    const treeMessages = await getInitialTreeMessages();
    res.send({ treeMessages });
  });

  app.get("/get_initial_nodes/:id", async (req, res) => {
    const getInitialNodes = await getInitialnodes(req.params.id);
    console.log("req.params", req.params);
    res.send(getInitialNodes);
  });

  app.get("/get_nodes/:id", async (req, res) => {
    const getNodes = await getNode(req.params.id);
    console.log("req.params", req.params);
    res.send(getNodes);
  });

};

module.exports = {
  chatRoutes,
};
