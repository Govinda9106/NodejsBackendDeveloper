function errorLogger(err, req, res, next) {
    console.log((`Error ${err}`));
    res.json({ Error: err.message })
};

export default errorLogger;