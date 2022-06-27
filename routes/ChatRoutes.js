const { getInitialTreeMessages,
  getNodeMessages 
  } = require("../chatQueries/ChatQueries");

const chatRoutes = (app) => {
  app.get("/allMessages", async (req, res) => {
    const treeMessages = await getInitialTreeMessages();
    console.log("first");
    res.send({ message: "All tree messages", treeMessages });
  });

  app.get('/get_nodes/:id' , async(req , res) => {
const getNodes = await getNodeMessages(req.params.id)
console.log('req.params', req.params)
res.send(getNodes)

})

};

module.exports = {
  chatRoutes,
};
