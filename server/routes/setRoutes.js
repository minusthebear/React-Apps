const path = require('path');
const setWeatherRoutes = require('./weatherRoutes');

const setRoutes = app => {

	setWeatherRoutes(app);

	app.get('/test', function(req, res, next) {
		res.sendFile(path.resolve('public', 'test.html'));
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
		res.status(err.status || 500).sendFile(path.resolve('public', 'error.html'));
	});
};

module.exports = setRoutes;
