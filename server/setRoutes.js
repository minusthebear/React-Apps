const path = require('path');
const _ = require('lodash');

const {
	addLocation,
	addCurrentWeather,
	findOneLocation,
	getAllLocations,
	getAllWeatherLogsByLocation
} = require('./mongodb/weather-db');

const setRoutes = app => {

	app.get('/test', function(req, res) {
		res.sendFile(path.resolve('public', 'test.html'));
	});

	app.post('/addNewLocation', async (req,res) => {
		let ret;
		try {
			ret = await findOneLocation(req.body);
		} catch(e) {
			throw new Error(e);
		}

		if (ret) {
			res.status(304);
			res.send({ message: 'Entry already exists.' })
		} else {
			try {
				await addLocation(req.body);
				res.status(200);
				res.send({ message: 'it worked!!! '});
			} catch (e) {
				res.status(404);
				res.send({ message: 'Unable to post at this time' });
			}
		}
	});

	app.post('/saveCurrentWeather', async (req,res) => {

		let ret,
			objMatch;
		
		try {
			ret = await getAllWeatherLogsByLocation(req.body.id);
		} catch(e) {
			throw new Error(e);
		}

		if (ret.length) {
			objMatch = _.find(ret, (item) => {
				let timeOne = new Date((new Date(req.body.dt).toLocaleDateString())).getTime(),
					timeTwo = new Date((new Date(item.dt).toLocaleDateString())).getTime();

				return timeOne === timeTwo;
			});
		}

		if (objMatch) {
			res.status(304);
			res.send({ message: 'Weather log for this date and location already exists.' })
			return;
		}

		try {
			await addCurrentWeather(req.body);
			res.status(200);
			res.send({ data: 'Current Weather Saved'});
		} catch(e) {
			res.status(404);
			res.send({ message: 'Unable to post at this time' });
		}
	});

	app.get('/allLocations', async (req,res) => {
		try {
			let val = await getAllLocations();
			res.send(val);
		} catch (e) {
			res.status(404);
			res.send({ message: 'Unable to get data at this time' });
		}
	});

	app.get('/*', function(req, res)  {
		res.render('index.jsx');
	});

	// error handler
	app.use(function(err, req, res, next) {
		// set locals, only providing error in development
		console.log('error, fool!')
		res.locals.message = err.message;
		res.locals.error = req.app.get('env') === 'development' ? err : {};

		// render the error page
		res.status(err.status || 500);
		res.sendFile(path.resolve('public', 'error.html'));
	});
};

module.exports = setRoutes;
