const { connectDB } = require('./connect-db');
const fs = require('fs');
const path = require('path');
const STARTING_JEOPARDY_JSON = path.resolve(__dirname, '..', 'JSON', 'defaultJeopardyData.json');
const FINAL_JEOPARDY_JSON = path.resolve(__dirname, '..', 'JSON', 'copyOfJeopardyData.json');
const REACT_JEOPARDY_CATEGORIES = 'reactJeopardyCategories';

async function initializeReactJeopardyDB(categories, db){

	try {

		fs.readFile(STARTING_JEOPARDY_JSON, async (err, data) => {
			if (err) {
				throw err;
			}
			let parsedData = JSON.parse(data);

			try {
				categories = db.collection('reactJeopardyCategories');
				for (let categoryName in parsedData) {
					await categories.insertOne({categoryName});
					let collection = db.collection(categoryName);
					await collection.insertMany(parsedData[categoryName]);
				}
			}
			catch (e) {
				throw e;
			}
		});

	} catch(e) {
		throw e;
	}
}

async function checkIfReactJeopardyDbExists() {

	let db;
	let categories;

	console.log('checkIfReactJeopardyDbExists');
	try {
		db = await connectDB();
		categories = await db.collection('reactJeopardyCategories').find({}).toArray();

		let existsSync = fs.existsSync(STARTING_JEOPARDY_JSON);

		console.log(existsSync);

		if ((!categories || !categories.length) && existsSync) {
			await initializeReactJeopardyDB(categories, db);
		}
	} catch(e) {
		if (db) {
			db.close();
		}
		throw e;
	}

}

async function updateUserSettings() {

	let db;
	let categories;
	try {
		db = await connectDB();
		categories = await db.collection('userSettings').find({}).toArray();

		let existsSync = fs.existsSync(STARTING_JEOPARDY_JSON);

		if ((!categories || !categories.length) && existsSync) {
			await initializeReactJeopardyDB(categories, db);
		}
	} catch(e) {
		if (db) {
			db.close();
		}
		throw e;
	}

}
/*

(node:52707) UnhandledPromiseRejectionWarning: TypeError: Cannot create property '_id' on string 'fart'
    at docs.map.doc (/Users/matthewhamann/Documents/apr_2019/Github-React-Applications/node_modules/mongodb/lib/operations/collection_ops.js:1162:15)
    at Array.map (<anonymous>)
    at prepareDocs (/Users/matthewhamann/Documents/apr_2019/Github-React-Applications/node_modules/mongodb/lib/operations/collection_ops.js:1160:15)
    at insertDocuments (/Users/matthewhamann/Documents/apr_2019/Github-React-Applications/node_modules/mongodb/lib/operations/collection_ops.js:850:10)
    at insertOne (/Users/matthewhamann/Documents/apr_2019/Github-React-Applications/node_modules/mongodb/lib/operations/collection_ops.js:883:3)
    at /Users/matthewhamann/Documents/apr_2019/Github-React-Applications/node_modules/mongodb/lib/utils.js:433:24
    at new Promise (<anonymous>)
    at executeOperation (/Users/matthewhamann/Documents/apr_2019/Github-React-Applications/node_modules/mongodb/lib/utils.js:428:10)
    at Collection.insertOne (/Users/matthewhamann/Documents/apr_2019/Github-React-Applications/node_modules/mongodb/lib/collection.js:463:10)
    at fs.readFile (/Users/matthewhamann/Documents/apr_2019/Github-React-Applications/server/mongodb/initialize-db.js:40:24)
(node:52707) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function
	without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 3)



 */


// This happens when this function fails. Find out how

/*


		// Save for when I need to write a file

		// let newData = JSON.parse(data);
		//
		// fs.writeFile(FINAL_JEOPARDY_JSON, data, (err) => {
		// 	if (err) {
		// 		throw err;
		// 	}
		// 	console.log('Successfully written');
		// });

(node:51874) UnhandledPromiseRejectionWarning: Error: Error: Damn, this sucks!
at initDB (/Users/matthewhamann/Documents/apr_2019/Github-React-Applications/server/mongodb/jeopardy-db.js:9:9)
at process._tickCallback (internal/process/next_tick.js:68:7)
(node:51874) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing
inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch().
(rejection id: 1)
(node:51874) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections t
hat are not handled will terminate the Node.js process with a non-zero exit code.

 */

module.exports = { checkIfReactJeopardyDbExists };
