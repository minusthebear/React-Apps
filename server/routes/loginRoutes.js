const { findUser, signupUser } = require('../mongodb/login-db');
const uuid = require('uuid/v4');
const md5 = require('md5');

const settingsRoutes = app => {

    app.post('/authentication', async (req, res, next) => {
        let {name, password} = req.body;

        let user = await findUser(name);

        if (!user) {
            return res.status(500).send({message:"User not found."});
        }

        let hash = md5(password);

        if (hash !== user.password) {
            return res.status(500).send({message: 'Incorrect password.'})
        }

        // Do code which might assemble user state

        res.status(200).send({message: 'It worked!'});
    });

    app.post('/create_user', async (req, res, next) => {
        let {name, password} = req.body,
            user = await findUser(name);

        if (user) {
            return res.status(500).send({message:"A user with that account name already exists."});
        }

        let userID = uuid();
        await signupUser({userID, name, password: md5(password)});
        res.status(201).send({message: 'Used saved'});
    });
};

module.exports = settingsRoutes;
