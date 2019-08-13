const createError = require('http-errors');
const express = require('express');
const redis = require('redis');
const session = require('express-session');
//
// session.Session.prototype.login = (user, cb) => {
//     this.user = user;
//     return;
//
//     // Save regenerate for later
//     req.session.regenerate((err) => {
//        if (err) {
//            cb(err);
//        }
//        req.session.user = user;
//        cb();
//     });
// };

const redisStore = require('connect-redis')(session);
const client = redis.createClient();
const flash = require('connect-flash');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const setRoutes = require('./routes/setRoutes');
const uuid = require('uuid/v4')
// const pino = require('express-pino-logger')();

const port = process.env.PORT || 8080;
const app = express();

// app.disable('x-powered-by');
app.use(logger('dev'));
// app.use(cookieParser('thisIsMySecret'));
// app.use(flash());
app.use(session({
    name: "id",
    genid: (req) => {
        console.log('Inside the session middleware')
        console.log(req.sessionID)
        return uuid() // use UUIDs for session IDs
    },
    key: 'session.sid',
    secret: 'thisIsMySecret',
    resave: false,
    saveUninitialized: false,
    //proxy: true,

    store: new redisStore({host: 'localhost', port: 6379, client: client,ttl :  260}),
    cookie: {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 20
    }
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin: 'http://localhost:3000', credentials: true}));

/*


 */

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
