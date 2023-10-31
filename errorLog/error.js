function errorLogger(err, req, res, next) {
    console.log((`Error ${err}`));
    res.status(400).json({ Error: err.message })
};

module.exports =  errorLogger;