const authenticationTokens = require('../authenticationTokens');

function sessionChecker(req, res, next) {

    if (req.session.user && req.session.user.token) {
        next();
    } else {
        res.status(401);
    }
}

module.exports = sessionChecker;