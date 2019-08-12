function sessionChecker(req, res, next) {
    if (req.session) {
        console.log(req.session);
        next();
    } else {
        res.send(403);
    }
}

module.exports = sessionChecker;