const _ = require('lodash');
const { initDB, getAllCategories } = require('../mongodb/jeopardy-db');

const setJeopardyRoutes = app => {

	initDB();
	console.log('\n *** -- setJeopardyRoutes -- *** \n')

	app.get('/getAllCategories', async (req, res) => {
		let ret;
		try {
			ret = await getAllCategories();
			res.status(200).send(ret);
		} catch(e) {
			res.status(404).send({ message: 'Unable to get data at this time' });
		}
	});
	//
	// app.post('/saveCurrentWeather', async (req,res,next) => {
	//
	// 	let ret,
	// 		objMatch;
	//
	// 	try {
	// 		ret = await getAllWeatherLogsByLocation(req.body.id);
	// 	} catch(e) {
	// 		res.status(404).send({ message: 'Unable to post at this time' });;
	// 		return;
	// 	}
	//
	// 	if (ret.length) {
	// 		objMatch = _.find(ret, (item) => {
	// 			let timeOne = new Date((new Date(req.body.dt).toLocaleDateString())).getTime(),
	// 				timeTwo = new Date((new Date(item.dt).toLocaleDateString())).getTime();
	//
	// 			return timeOne === timeTwo;
	// 		});
	// 	}
	//
	// 	if (objMatch) {
	// 		res.status(200).send({ message: 'No entry was saved. Weather log for this date and location already exists.' });
	// 		return;
	// 	}
	//
	// 	try {
	// 		await addCurrentWeather(req.body);
	// 		res.status(204).send();
	// 	} catch(e) {
	// 		res.status(404).send({ message: 'Unable to post at this time' });
	// 		next(e);
	// 	}
	// });
	//
	// app.post('/getWeatherLog', async (req, res, next) => {
	// 	try {
	// 		let val = await getWeatherLog(req.body._id);
	// 		res.status(200).send(val);
	// 	} catch(e) {
	// 		res.status(404).send({ message: 'Unable to send data at this time'});
	// 		next(e);
	// 	}
	// });
	//
	// app.get('/allWeatherLogsByLocation', async (req, res, next) => {
	// 	try {
	// 		let val = await getAllWeatherLogsByLocation(parseInt(req.query.id));
	// 		res.status(200).send(val);
	// 	} catch(e) {
	// 		res.status(404).send({ message: 'Unable to send data at this time'});
	// 		next(e);
	// 	}
	// });
	//
	// app.get('/allLocations', async (req,res, next) => {
	// 	try {
	// 		let val = await getAllLocations();
	// 		res.status(200).send(val);
	// 	} catch (e) {
	// 		res.status(404).json({ message: 'Unable to get data at this time' });
	// 		next(e);
	// 	}
	// });
	//
	// app.delete('/deleteLocation', async (req, res, next) => {
	// 	try {
	// 		let val1 = await deleteAllWeatherLogs(req.body.id);
	// 		let val2 = await deleteLocation(req.body.id);
	// 		res.status(204).send();
	// 	} catch (e) {
	// 		res.status(404).send({ message: 'Unable to delete location at this time' });
	// 		next(e);
	// 	}
	// });
	//
	// app.delete('/deleteWeatherLog', async (req, res, next) => {
	// 	try {
	// 		let val = await deleteWeatherLog(req.body._id);
	// 		res.status(204).send();
	// 	} catch (e) {
	// 		res.status(404).send({ message: 'Unable to delete weather log at this time' });
	// 		next(e);
	// 	}
	// });
};

module.exports = setJeopardyRoutes;
