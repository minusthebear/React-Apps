const { connectDB } = require('./connect-db');
const ObjectId = require('mongodb').ObjectId;

async function addUser(location) {
    let db = await connectDB();
    let collection = db.collection('users');
    await collection.insertOne(location);
}

async function editUser(location) {
    let db = await connectDB();
    let collection = db.collection('users');
    await collection.updateOne(location);
}

module.exports = { addUser, editUser };
