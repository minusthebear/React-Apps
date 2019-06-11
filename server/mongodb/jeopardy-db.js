const { connectJeopardyDB } = require('./connect-db');
const { checkIfReactJeopardyDbExists } = require('./initialize-db');


async function getAllCategories() {
	let db;
	try {
		db = await connectJeopardyDB();
		let collection = db.collection('reactJeopardyCategories');
		let ret = await collection.find({}).toArray();
		return ret;
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

module.exports = { getAllCategories, initDB };
