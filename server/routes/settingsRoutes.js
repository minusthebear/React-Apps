const {editSettings} = require('../mongodb/settings-db');
const uuid = require('uuid/v4');

const settingsRoutes = app => {

    app.put('/updateSettings', async (req, res, next) => {

        let id,
            body;

        console.log(req.body);

        try {
            await editSettings(req.body);
            res.status(204).send();
        } catch(e) {
            res.status(400).send({ message: 'Unable to post at this time' });
        }
    });
};

module.exports = settingsRoutes;
