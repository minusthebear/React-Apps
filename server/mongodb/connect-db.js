const { MongoClient } = require('mongodb');
const weatherUrl = 'mongodb://localhost:27017/weather';
const jeopardyUrl = 'mongodb://localhost:27017/jeopardy';
const usersUrl = 'mongodb://localhost:27017/users';
const settingsUrl = 'mongodb://localhost:27017/settings';
let db = null;

async function connectWeatherDB(){
	if (db) return db;
	let client = await MongoClient.connect(weatherUrl, { useNewUrlParser: true });
	db = client.db();
	return db;
}

async function connectJeopardyDB(){
	if (db) return db;
	let client = await MongoClient.connect(jeopardyUrl, { useNewUrlParser: true });
	db = client.db();
	return db;
}

async function connectSettingsDB(){
	if (db) return db;
	let client = await MongoClient.connect(settingsUrl, { useNewUrlParser: true });
	db = client.db();
	return db;
}

async function connectUsersDB() {
	if (db) return db;
	let client = await MongoClient.connect(usersUrl, {useNewUrlParser: true});
	db = client.db();
	return db;
}

module.exports = { connectJeopardyDB, connectSettingsDB, connectUsersDB, connectWeatherDB };
