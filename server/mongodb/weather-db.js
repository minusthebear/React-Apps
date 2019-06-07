const { connectWeatherDB } = require('./connectDB');

async function addLocation(location) {
	let db = await connectWeatherDB();
	let collection = db.collection('locations');
	await collection.insertOne(location);
}

module.exports = { addLocation };
