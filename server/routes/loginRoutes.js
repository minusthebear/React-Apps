const { findUser, signupUser } = require('../mongodb/login-db');
const uuid = require('uuid/v4');
const md5 = require('md5');

const settingsRoutes = app => {

    app.post('/login', async (req, res, next) => {
        let {username, password} = req.body;

        let user = await findUser(username);

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

    app.post('/signup', async (req, res, next) => {
        let {username, password} = req.body;

        let user = await findUser(username);

        if (user) {
            return res.status(500).send({message:"A user with that account name already exists."});
        }

        let userID = uuid();

        await signupUser({userID, username, password: md5(password)});

        // Do code which might assemble user state

        res.status(200).send({message: 'It worked!'});
    });
};

module.exports = settingsRoutes;
