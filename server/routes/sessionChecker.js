function sessionChecker(req, res, next) {
    console.log(req.session);
    if (req.session.fake_id) {
        next();
    } else {
        res.status(401);
    }
}

module.exports = sessionChecker;