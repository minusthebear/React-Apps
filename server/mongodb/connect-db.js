const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017/reactApps';
let db = null;

async function connectDB(){
	if (db) return db;
	let client = await MongoClient.connect(url, { useNewUrlParser: true });
	db = client.db();
	return db;
}

module.exports = { connectDB };
