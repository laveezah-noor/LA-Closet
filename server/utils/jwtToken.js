
// Creates token and save in cookie
const sendToken = (user, statusCode, res, message) => {
    const token = user.getJwtToken();
    // Options for cookie
    const options = {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000),
        httpOnly: true,
    };
    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        message: message || "Token generated successfully",
        token,
        user,
    });
}

module.exports = sendToken;