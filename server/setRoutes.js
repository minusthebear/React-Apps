
const path = require('path');


const setRoutes = app => {

	app.get('/test', function(req, res) {
		console.log('IT HIT TEST');
		console.log(path.join());
		console.log(path.resolve('public', 'index.jsx.html'));
		// console.log(path.join('..', __dirname, 'public', 'index.html'));
		res.sendFile(path.resolve('public', 'test.html'));
	});

	app.post('/backEndTest', (req,res) => {
		console.log('back-end test');
		console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
		console.log(console.log(req.body));
		console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
		res.send({ data: 'it worked!!! '});
	});

	app.get('/*', function(req, res)  {
		console.log(req.data);
		console.log('We have a winner!');
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
