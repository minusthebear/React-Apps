const { connectWeatherDB } = require('./connectDB');

async function addLocation(location) {
	let db = await connectWeatherDB();
	let collection = db.collection('locations');
	await collection.insertOne(location);
}

async function getAllLocations() {
	let db = await connectWeatherDB();
	let collection = db.collection('locations');
	let ret = await collection.find({}).toArray();
	return ret;
}

module.exports = { addLocation, getAllLocations };
