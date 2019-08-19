const _ = require('lodash');
const sessionChecker = require('./sessionChecker');
const {
	addLocation,
	addCurrentWeather,
	deleteAllWeatherLogs,
	deleteLocation,
	deleteWeatherLog,
	findOneLocation,
	getAllLocations,
	getAllWeatherLogsByLocation,
	getWeatherLog
} = require('../mongodb/weather-db');

const setWeatherRoutes = app => {

	app.post('/addNewLocation', sessionChecker, async (req, res, next) => {
		let ret;
		try {
			ret = await findOneLocation(req.body);
		} catch(e) {
			res.status(404).send({ message: 'Unable to post at this time' });
			return;
		}

		if (ret) {
			res.status(200).send({ message: 'Entry already exists.' });
		} else {
			try {
				await addLocation(req.body);
				res.status(204).send();
			} catch (e) {
				res.status(404).send({ message: 'Unable to post at this time' });
			}
		}
	});

	app.post('/saveCurrentWeather', sessionChecker, async (req,res,next) => {

		let ret,
			objMatch;

		try {
			ret = await getAllWeatherLogsByLocation(req.body.id);
		} catch(e) {
			res.status(404).send({ message: 'Unable to post at this time' });;
			return;
		}

		if (ret.length) {
			objMatch = _.find(ret, (item) => {
				let timeOne = new Date((new Date(req.body.dt).toLocaleDateString())).getTime(),
					timeTwo = new Date((new Date(item.dt).toLocaleDateString())).getTime();

				return timeOne === timeTwo;
			});
		}

		if (objMatch) {
			res.status(200).send({ message: 'No entry was saved. Weather log for this date and location already exists.' });
			return;
		}

		try {
			await addCurrentWeather(req.body);
			res.status(204).send();
		} catch(e) {
			res.status(404).send({ message: 'Unable to post at this time' });
		}
	});

	app.post('/getWeatherLog', sessionChecker, async (req, res, next) => {
		try {
			let val = await getWeatherLog(req.body._id);
			res.status(200).send(val);
		} catch(e) {
			res.status(404).send({ message: 'Unable to send data at this time'});
		}
	});

	app.get('/allWeatherLogsByLocation', sessionChecker, async (req, res, next) => {
		try {
			let val = await getAllWeatherLogsByLocation(parseInt(req.query.id));
			res.status(200).send(val);
		} catch(e) {
			res.status(404).send({ message: 'Unable to send data at this time'});
		}
	});

	app.get('/allLocations', sessionChecker, async (req,res, next) => {
		try {
			let val = await getAllLocations();
			res.status(200).send(val);
		} catch (e) {
			res.status(404).json({ message: 'Unable to get data at this time' });
		}
	});

	app.delete('/deleteLocation', sessionChecker, async (req, res, next) => {
		try {
			await deleteAllWeatherLogs(req.body.id);
			await deleteLocation(req.body.id);
			res.status(204).send();
		} catch (e) {
			res.status(404).send({ message: 'Unable to delete location at this time' });
		}
	});

	app.delete('/deleteWeatherLog', sessionChecker, async (req, res, next) => {
		try {
			await deleteWeatherLog(req.body._id);
			res.status(204).send();
		} catch (e) {
			res.status(404).send({ message: 'Unable to delete weather log at this time' });
		}
	});
};

module.exports = setWeatherRoutes;
