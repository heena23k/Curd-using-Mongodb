const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'mydatabase';

async function main() {
    await client.connect();
    console.log('Connected to MongoDB server');

    const db = client.db(dbName);
    const collection = db.collection('example');

    

    const findResult = await collection.findOne().toArray ;
    console.log('Found document:', findResult);

}
main();
