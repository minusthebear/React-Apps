const { connectUsersDB } = require('./connect-db');
const ObjectId = require('mongodb').ObjectId;

async function signupUser(user) {
    let db = await connectUsersDB();
    let collection = db.collection('users');
    await collection.insertOne(user);
}

async function findUser(username) {
    let db = await connectUsersDB();
    let collection = db.collection('users');
    await collection.findOne({username});
}

module.exports = {
    findUser,
    signupUser
};
