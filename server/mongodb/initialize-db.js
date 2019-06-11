const { connectJeopardyDB } = require('./connect-db');

/* This code initializes the database with sample users.
 Note, it does not drop the database - this can be done manually. Having code in your application that could drop your whole DB is a fairly risky choice.*/
export async function initializeReactJeopardyDB(){
	let db = await connectJeopardyDB();
	let user = await db.collection('reactJeopardyCategories').find({}).toArray();
	console.log(user);
	// if (!user) {
	// 	for (let collectionName in defaultState) {
	// 		let collection = db.collection(collectionName);
	// 		await collection.insertMany(defaultState[collectionName]);
	// 	}
	// }
}
