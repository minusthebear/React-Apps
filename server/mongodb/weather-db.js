const { connectWeatherDB } = require('./connectDB');

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

async function getAllWeatherLogsByLocation(id) {
	let db = await connectWeatherDB();
	let collection = db.collection('weatherLog');
	let ret = await collection.find({ id: id }).toArray();
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

module.exports = {
	addLocation,
	addCurrentWeather,
	findOneLocation,
	getAllLocations,
	getAllWeatherLogsByLocation
};
