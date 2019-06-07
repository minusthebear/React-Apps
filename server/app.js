const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const setRoutes = require('./setRoutes');
// const pino = require('express-pino-logger')();

const port = process.env.PORT || 8080;
const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
console.log(path.resolve());

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
// app.use(pino);

setRoutes(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
