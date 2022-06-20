const {db} =  require('../database/Chat')




const getChatMessages = async () => {
    let statementQuery = `SELECT * FROM tree;`   
    const res = await db(statementQuery)
    console.log('res', res)
}

module.exports = {
    getChatMessages  
} 