const {editSettings} = require('../mongodb/settings-db');
const uuid = require('uuid/v4');
const sessionChecker = require('./sessionChecker');

const settingsRoutes = app => {

    app.put('/updateSettings', sessionChecker, async (req, res, next) => {

        let id,
            body;

        try {
            await editSettings(req.body);
            res.status(204).send();
        } catch(e) {
            res.status(400).send({ message: 'Unable to post at this time' });
        }
    });
};

module.exports = settingsRoutes;
