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

    app.post('/token_credential_check', async (req, res) => {
        console.log('tokenCredentialCheck');
        console.log(req.body);
       console.log(authenticationTokens);
       // let chk = authenticationTokens.find()
        res.status(200);
    });

    app.post('/authentication', async (req, res) => {
        let {name, password} = req.body,
            user = await findUser(name);

        console.log(req.body);

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

        let obj = {
            token,
            userData: userData(user)
        };

        authenticationTokens.push(obj);
        req.session.user = obj;
        console.log(req.session);

        req.session.save();

        // console.log('req.session', req.session);

        const retData = {
            profile: userData(user),
            settings: userSettings(settings),
            token
        };

        res.status(200).send(retData);
    });

    app.post('/create_user', async (req, res) => {
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
        let obj = {
            token,
            userData: userData(user)
        };

        authenticationTokens.push(obj);
        req.session.user = obj;

        const retData = {
            profile: userData(newUser),
            settings: userSettings(settings),
            token
        };

        res.status(200).send(retData);
    });


    app.post('/session_check', async (req, res) => {
        let body = req.body;

        console.log('\nbody\n', body);
        console.log('\nsession\n', req.session);
        console.log('\nauthentication tokens\n', authenticationTokens);
        const user = authenticationTokens.find((user) => {
            if (body.token === user.token) {
                return user.userData;
            }
        });
        console.log(user);

        if (!user) {
            res.status(401).send();
            return;
        }

        const settings = await findUserSettings(user.userID);

        const retData = {
            profile: userData(user),
            settings: userSettings(settings),
            token: body.token
        };

        console.log('\nauthentication tokens\n', authenticationTokens);

        res.status(200).send(retData);
    });
};

module.exports = settingsRoutes;
