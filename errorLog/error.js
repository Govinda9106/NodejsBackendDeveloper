function errorLogger(err, req, res, next) {
    console.log((`Error ${err}`));
    res.json({ Error: err.message })
};

module.exports =  errorLogger;