
const path = require('path');


const setRoutes = app => {

	app.get('/test', function(req, res) {
		console.log('IT HIT TEST');
		console.log(path.join());
		console.log(path.resolve('public', 'index.html'));
		// console.log(path.join('..', __dirname, 'public', 'index.html'));
		res.sendFile(path.resolve('public', 'test.html'));
	});

	app.get('/*', function(req, res)  {
		console.log('We have a winner!');
		res.render('index');
	});

};

module.exports = setRoutes;