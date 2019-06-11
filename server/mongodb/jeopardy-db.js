const { initializeReactJeopardyDB } = require('./initialize-db');

async function initDB() {
	try {
		let x = await initializeReactJeopardyDB();
		console.log('initializeReactJeopardyDB\n\n\n')
		console.log(x);
	} catch(e) {
		throw new Error(e);
	}
}

module.exports = initDB;
