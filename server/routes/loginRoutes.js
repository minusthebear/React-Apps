const {setSettings} = require('../mongodb/settings-db');
const uuid = require('uuid/v4');

const settingsRoutes = app => {

    app.post('/signup', async (req, res, next) => {
        let {username, password} = req.body;

    });
};

module.exports = settingsRoutes;
