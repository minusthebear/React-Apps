const { connectJeopardyDB } = require('./connect-db');
const { checkIfReactJeopardyDbExists } = require('./initialize-db');
const Aigle = require('aigle');

async function getAllCategories() {
	let db;
	try {
		db = await connectJeopardyDB();

		let collection = db.collection('reactJeopardyCategories');
		let ret = await collection.find({}).toArray();

		let data = await loopThroughResults(ret, db);
		return data;
	} catch (e) {
		if (db) {
			db.close();
		}
		throw e;
	}
}

async function initDB() {
	try {
		await checkIfReactJeopardyDbExists();
	} catch(e) {
		throw new Error(e);
	}
}

async function loopThroughResults(ret, db) {
	let data = {};

	await Aigle.each(ret, async (dtm) => {
		let key = dtm.categoryName;
		try {
			let category = db.collection(key);
			let val = await category.find({}).toArray();
			data[key] = val;
		} catch (e) {
			throw e;
		}
	});
	return data;
}

module.exports = { getAllCategories, initDB };
