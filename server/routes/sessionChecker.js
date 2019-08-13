function sessionChecker(req, res, next) {
    console.log(req.session);
    if (req.session.user && req.session.user.token) {
        next();
    } else {
        res.status(401);
    }
}

module.exports = sessionChecker;