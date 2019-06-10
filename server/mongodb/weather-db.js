const { connectWeatherDB } = require('./connectDB');
const ObjectId = require('mongodb').ObjectId;

async function addLocation(location) {
	let db = await connectWeatherDB();
	let collection = db.collection('locations');
	await collection.insertOne(location);
}

async function addCurrentWeather(weather) {
	let db = await connectWeatherDB();
	let collection = db.collection('weatherLog');
	await collection.insertOne(weather);
}

async function deleteAllWeatherLogs(id) {
	let db = await connectWeatherDB();
	let collection = db.collection('weatherLog');
	let ret = collection.deleteMany({id});
	return ret;
}

async function deleteWeatherLog(_id) {
	let db = await connectWeatherDB();
	let collection = db.collection('weatherLog');
	let ret = await collection.deleteOne({ _id: ObjectId(_id) });
	return ret;
}

async function deleteLocation(id) {
	let db = await connectWeatherDB();
	let collection = db.collection('locations');
	let ret = await collection.deleteMany({ id });
	return ret;
}

async function findOneLocation(location) {
	let db = await connectWeatherDB();
	let collection = db.collection('locations');
	let ret = await collection.findOne({ id: location.id });
	return ret;
}

async function getAllLocations() {
	let db = await connectWeatherDB();
	let collection = db.collection('locations');
	let ret = await collection.find({}).toArray();
	return ret;
}

async function getAllWeatherLogsByLocation(id) {
	let db = await connectWeatherDB();
	let collection = db.collection('weatherLog');
	let ret = await collection.find({id}).toArray();
	return ret;
}

async function getWeatherLog(_id) {
	let db = await connectWeatherDB();
	let collection = db.collection('weatherLog');
	let ret = await collection.findOne({_id: ObjectId(_id)});
	return ret;
}

module.exports = {
	addLocation,
	addCurrentWeather,
	deleteAllWeatherLogs,
	deleteLocation,
	deleteWeatherLog,
	findOneLocation,
	getAllLocations,
	getAllWeatherLogsByLocation,
	getWeatherLog,

};
