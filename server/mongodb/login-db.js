const { connectDB } = require('./connect-db');
const ObjectId = require('mongodb').ObjectId;

async function signupUser(user) {
    let db = await connectDB();
    let collection = db.collection('users');
    return await collection.insertOne(user);
}

async function findUser(name) {
    let db = await connectDB();
    let collection = db.collection('users');
    return await collection.findOne({ name });
}

module.exports = {
    findUser,
    signupUser
};
