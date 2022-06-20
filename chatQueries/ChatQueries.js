const {db} = require('../database/Chat')



console.log('dsfdf',db)
const getChatMessages = async () => {
    const connection = await db.getConnection();
    try {
        let statementQuery = await connection.query("SELECT * FROM tree;")   
        console.log('statementQuery', statementQuery)
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getChatMessages  
} 