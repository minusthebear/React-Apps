const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017/weather';
let db = null;

async function connectWeatherDB(){
	if (db) return db;
	let client = await MongoClient.connect(url, { useNewUrlParser: true });
	db = client.db();
	return db;
}

module.exports = { connectWeatherDB };
