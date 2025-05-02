const {dbConnection} = require('./db.js');

async function main(){
    try{
        const db = await dbConnection();
        const collection = db.collection('example');
        const findResult = await collection.find().toArray();
        console.log('Found documents:', findResult);

    }
    catch(err){
        console.log('Error perfoming task:', err);
        
    }

    

}
main();