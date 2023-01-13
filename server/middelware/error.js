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

    // Duplicate key error
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`
        err = new ErrorHandler(message, 400)
    }

    // Validation error
    if (err.name === "JsonWebTokenError") {
        const message = `Json Web Token is invalid. Try Again!!!`
        err = new ErrorHandler(message, 400)
    }

    // Token Expired error
    if (err.name === "TokenExpiredError") {
        const message = `Json Web Token is expired. Try Again!!!`
        err = new ErrorHandler(message, 400)
    }


    res.status(err.StatusCode).json({
        success: false,
        message: err.message
    })
}

