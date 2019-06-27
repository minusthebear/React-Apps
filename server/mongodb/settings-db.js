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
    return await collection.findOne({userID});
}

async function editUser(location) {
    let db = await connectDB();
    let collection = db.collection('users');
    await collection.updateOne(location);
}

module.exports = { addUser, createUserSettings, editUser, findUserSettings };
