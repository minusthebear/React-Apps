const { addLocation, addCurrentWeather, getAllLocations } = require('./mongodb/weather-db');
const path = require('path');

const setRoutes = app => {

	app.get('/test', function(req, res) {
		res.sendFile(path.resolve('public', 'test.html'));
	});

	app.post('/addNewLocation', async (req,res) => {
		await addLocation(req.body);
		res.send({ data: 'it worked!!! '});
	});

	app.post('/saveCurrentWeather', async (req,res) => {
		console.log(req.body);
		await addCurrentWeather(req.body);
		res.send({ data: 'Current Weather Saved'});
	});

	app.get('/allLocations', async (req,res) => {
		let val = await getAllLocations();
		res.send(val);
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
