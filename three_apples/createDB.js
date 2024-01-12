var MongoClient = require('mongodb').MongoClient
var data = require("./data.js").data

const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
try {
    await client.connect();
    var database = client.db("threeapples");
    database.dropDatabase()
    database = client.db("threeapples");
    const apples = database.collection("apples");
    const result = await apples.insertMany(data);
    console.log(`${result.insertedCount} documents were inserted`);
}
finally 
{
await client.close();
}
}
run()