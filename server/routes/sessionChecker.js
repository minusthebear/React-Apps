const authenticationTokens = require('../authenticationTokens');

function sessionChecker(req, res, next) {
    console.log(req.body);
    console.log('Session Checker');
    console.log(req.session);
    console.log('Authentication tokens');
    console.log(authenticationTokens);

    if (req.session.user && req.session.user.token) {
        next();
    } else {
        res.status(401);
    }
}

module.exports = sessionChecker;