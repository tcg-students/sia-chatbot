const {getChatMessages} = require('../chatQueries/ChatQueries')


const chatRoutes = (app) => {

app.get('/allMessages' , async(req, res) =>{
    const allMes = await getChatMessages()
    console.log('first')
    res.send(allMes)
}
)
}

module.exports = {
    chatRoutes
}