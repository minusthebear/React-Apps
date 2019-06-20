const { findUser, signupUser } = require('../mongodb/login-db');
const uuid = require('uuid/v4');
const md5 = require('md5');

const settingsRoutes = app => {

    const userData = (data) => {
        return {
            userID: data.userID,
            name: data.name
        };
    }

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

        res.status(200).send(user);
    });

    app.post('/create_user', async (req, res, next) => {
        let {name, password} = req.body,
            user = await findUser(name);

        if (user) {
            return res.status(500).send({message:"A user with that account name already exists."});
        }

        let userID = uuid();
        await signupUser({userID, name, password: md5(password)});
        let newUser = await findUser(name);
        res.status(201).send(newUser);
    });
};

module.exports = settingsRoutes;
