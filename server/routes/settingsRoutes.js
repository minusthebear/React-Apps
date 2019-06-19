const {setSettings} = require('../mongodb/settings-db');
const uuid = require('uuid/v4');

const settingsRoutes = app => {

    app.post('/settings', async (req, res, next) => {

        let id,
            body;

        if (!req.body.id) {
            id = uuid();
        }

        // TODO: login page

        //
        // let ret;
        // try {
        //     ret = await setSettings(req.body);
        // } catch(e) {
        //     res.status(404).send({ message: 'Unable to post at this time' });
        //     return;
        // }
        //
        // if (ret) {
        //     res.status(200).send({ message: 'Entry already exists.' });
        //     return;
        // } else {
        //     try {
        //         await addLocation(req.body);
        //         res.status(204).send();
        //     } catch (e) {
        //         res.status(404).send({ message: 'Unable to post at this time' });
        //         next(e);
        //     }
        // }
    });
};

module.exports = settingsRoutes;
