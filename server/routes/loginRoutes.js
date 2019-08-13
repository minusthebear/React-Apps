const { findUser, signupUser } = require('../mongodb/login-db');
const uuid = require('uuid/v4');
const md5 = require('md5');
const sessionChecker = require('./sessionChecker');
const { createUserSettings, findUserSettings } = require('../mongodb/settings-db');

const authenticationTokens = [];

const settingsRoutes = app => {

    const userData = (data) => {
        return {
            userID: data.userID,
            name: data.name
        };
    };


    const userSettings = (data) => {
        return {
            readWriteQs: data.readWriteQs
        };
    };

    app.post('/authentication', async (req, res, next) => {
        let {name, password} = req.body,
            user = await findUser(name);

        if (!user) {
            return res.status(500).send({message:"User not found."});
        }

        let hash = md5(password);

        if (hash !== user.password) {
            return res.status(500).send({message: 'Incorrect password.'})
        }

        let settings = await findUserSettings(user.userID);

        if (!settings) {
            await createUserSettings(user.userID);
            settings = await findUserSettings(user.userID);
        }

        let token = uuid();

        authenticationTokens.push({
            token,
            userData: userData(user)
        });

        // Will change this and make more scalable later
        req.session.user = new Object({
            token,
            userData: userData(user)
        });
        console.log('req.session', req.session);

        req.session.save();

        console.log('req.session', req.session);

        const retData = {
            profile: userData(user),
            settings: userSettings(settings),
            token
        };

        res.status(200).send(retData);
    });

    app.post('/create_user', async (req, res, next) => {
        let {name, password} = req.body,
            user = await findUser(name);

        if (user) {
            return res.status(500).send({message:"A user with that account name already exists."});
        }

        let userID = uuid();
        await signupUser({userID, name, password: md5(password)});
        await createUserSettings(userID);

        let newUser = await findUser(name);
        let settings = await findUserSettings(userID);

        let token = uuid();

        authenticationTokens.push({
            token,
            userData: userData(user)
        });

        req.session.user = new Object({
            token,
            userData: userData(user)
        });

        console.log('req.session', req.session);

        req.session.save();

        console.log('req.session', req.session);


        const retData = {
            profile: userData(newUser),
            settings: userSettings(settings),
            token
        };

        res.status(200).send(retData);
    });
};

module.exports = settingsRoutes;
