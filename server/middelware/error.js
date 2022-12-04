const ErrorHandler = require('../utils/errorHandler');

module.exports = (err, req, res, next)=>{
    err.StatusCode = err.StatusCode || 500;
    err.message = err.message || "Internal Server Error";

    // Wrong Mongodb Id error
    if (err.name === "CastError") {
        const message = `Refrence not found.
        Invalid: ${err.path}`
        err = new ErrorHandler(message, 400)
    }

    res.status(err.StatusCode).json({
        success: false,
        message: err.message
    })
}