const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return next(new ErrorHandler('Login first to access this resource.', 401));
    }
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = await userModel.findById(decoded.id);
    next();
})