const {getChatMessages, getNode} = require('../chatQueries/ChatQueries')

const chatRoutes = (app) => {

app.get('/allMessages' , async(req, res) =>{
    const allMes = await getChatMessages()
    console.log('first')
    res.send(allMes)
}
)

app.get('/nodeForTree', async(req, res)=> {
    const allNode = await getNode()
    res.send("node for tree message", allNode)
})
}

module.exports = {
    chatRoutes
}
