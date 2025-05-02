const {dbConnection} = require('./db.js');

async function main(){
    try{
        const db = await dbConnection();
        const collection = db.collection('example');
        const data = [
            { name: 'John Doe', age: 30 },
            { name: 'Jane Smith', age: 25 },
            { name: 'Alice Johnson', age: 28 }
        ];
        const updateResult = await collection.updateMany({ age: { $gt: 25 } }, { $set: { status: 'senior' } });

        console.log( updateResult.modifiedCount);

    }
    catch(err){
        console.log('Error perfoming task:', err);
        
    }

    

}
main();