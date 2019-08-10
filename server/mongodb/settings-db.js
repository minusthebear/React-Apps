const { connectDB } = require('./connect-db');
const ObjectId = require('mongodb').ObjectId;

async function addUser(location) {
    let db = await connectDB();
    let collection = db.collection('users');
    await collection.insertOne(location);
}

async function createUserSettings(userID) {

    let db,
        user,
        userSettings;

    try {
        db = await connectDB();
        userSettings = db.collection('userSettings');
        user = await userSettings.findOne({ userID });

        if (user) {
            return;
        }

        const settings = {
            userID,
            readWriteQs: 'Mongo'
        };

        return await userSettings.insertOne(settings);

    } catch(e) {
        if (db) {
            db.close();
        }
        throw e;
    }

}

async function findUserSettings(userID) {
    let db = await connectDB();
    let collection = db.collection('userSettings');
    let val = await collection.findOne({userID});
    console.log('Line 45, findUserSettings');
    console.log(val);
    return val;
}

async function editSettings(settings) {
    let db = await connectDB();
    let collection = db.collection('userSettings');
    await collection.updateOne(settings);
}

module.exports = { addUser, createUserSettings, editSettings, findUserSettings };
