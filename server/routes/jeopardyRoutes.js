const _ = require('lodash');
const { initDB, getAllCategories } = require('../mongodb/jeopardy-db');
const sessionChecker = require('./sessionChecker');

const setJeopardyRoutes = app => {

	initDB();

	app.get('/getAllCategories', sessionChecker, async (req, res) => {
		let ret;
		try {
			ret = await getAllCategories();
			res.status(200).send(ret);
		} catch(e) {
			res.status(404).send({ message: 'Unable to get data at this time' });
		}
	});
};

module.exports = setJeopardyRoutes;
