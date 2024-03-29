const catchAsyncError = require('../middelware/catchAsyncError');
const UserModel = require('../models/userModel');
const ApiFeature = require('../utils/apifeatures');
const ErrorHandler = require('../utils/errorHandler');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');

const ProductData = {
    "title": "User 1",
    "summary": "Product 1 description",
    "price": 100,
    "category": "category 1",
    "images": {
        "public_id": "sample_id",
        "url": "sample_url"
    }    
}

const registerUser = catchAsyncError( async (req, res, next) => {
    const {name, email, password, role} = req.body;
    console.log(req.body)
    UserModel.create(
        {
            name,
            email,
            password,
            role,
            avatar: {
                public_id: "sample_id",
                url: "sample_url"
            }
        }, (err, data) =>{
        if(!err){
            sendToken(data, 200, res, "User created successfully");
        } else {
            res.json({
                message: "User creation failed",
                status: 404,
                data: err.message
            })
        }
    });
})

const loginUser = ( async (req, res, next) => {
    const {email, password} = req.body;
    // console.log(req.body)
    if(!email || !password){
        return next(new ErrorHandler("Please enter email and password", 400))
    }
    const user = await UserModel.findOne({email}).select("+password");
    // console.log(user)
    if(!user){
        return next(new ErrorHandler("Invalid email or password", 401))
    }
    const isPasswordMatched = await user.comparePassword(password);
    // console.log("I'm here ",isPasswordMatched)
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid password", 401))
    }
    sendToken(user, 200, res, "User logged in successfully");
})

const logoutUser = catchAsyncError( async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        message: "User logged out successfully",
        status: 200,
    })
});

const forgotPassword = catchAsyncError( async (req, res, next) => {
    const user = await UserModel.findOne({email:req.body.email});
    if(!user){
        return next(new ErrorHandler("User not found", 404))
    }
    const resetToken = user.getResetPasswordToken();
    await user.save({validateBeforeSave: false});
    const resetUrl = `${req.protocol}://${req.get(
        'host'
        )}/api/v1/password/reset/${resetToken}`;
    const message = `Your password reset token is as follow:\n\n${resetUrl}\n\nIf you have not requested this email, then ignore it.`;
    try {
        await sendEmail({
            email: user.email,
            subject: "ShopIT Password Recovery",
            message
        })
        res.status(200).json({
            message: `Email sent to: ${user.email}`,
            status: 200,
        })
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save({validateBeforeSave: false});
        return next(new ErrorHandler(error.message, 500))
    }
});

const resetPassword = catchAsyncError( async (req, res, next) => {
    const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');
    const user = await UserModel.findOne({
        resetPasswordToken, 
        resetPasswordExpire: {$gt: Date.now()}});
    if(!user){
        return next(new ErrorHandler("Password reset token is invalid or has expired", 400))
    }
    if(req.body.password !== req.body.confirmPassword){
        return next(new ErrorHandler("Password does not match", 400))
    }
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    sendToken(user, 200, res, "Password reset successfully");
});

const getAllUsers = catchAsyncError( async (req, res, next) => {  
    const userCount = await UserModel.countDocuments();
    const apiFeature = new ApiFeature( UserModel, req.query)
    .search()
    .filter()
    .pagination(10);
    const users = await apiFeature.query;
    // products();
    res.status(200).json({
        message: "User shown successfully",
        status: 200,
        data: users,
        productCount: userCount
    })
})

const getUser = catchAsyncError(async (req, res, next) => {
    const user = await UserModel.findById(req.user.id);
    
    if(user){
    res.json({
                    message: "User found successfully",
                    status: 200,
                    data: user
                })
            } 
})

const getUserById = catchAsyncError(async (req, res, next) => {
    const user = await UserModel.findById(req.params.id);
    
    if(user){
    res.json({
                    message: "User found successfully",
                    status: 200,
                    data: user
                })
            } 
})


const updatePassword = catchAsyncError( async (req, res, next) => {
    const user = await UserModel.findById(req.user.id).select('+password');
    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);
    if(!isPasswordMatched){
        return next(new ErrorHandler("Old password is incorrect", 400))
    }
    if(req.body.newPassword !== req.body.confirmPassword){
        return next(new ErrorHandler("Password does not match", 400))
    }
    user.password = req.body.newPassword;
    await user.save();
    sendToken(user, 200, res, "Password updated successfully");
    
});

const updateProfile = catchAsyncError( async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
    }
    const user = await UserModel.findByIdAndUpdate(
        req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
        })
    res.status(200).json({
        message: "User profile updated successfully",
        status: 200, 
    })
});

// Update user role
const updateUser = catchAsyncError( async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }
    const user = await UserModel.findByIdAndUpdate(
        req.params  .id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
        })


        res.status(200).json({
            message: "User updated successfully",
            status: 200, 
            data: data
        })
});

const deleteUser = catchAsyncError( async (req, res, next) => {
    
    const user = await UserModel.findById(req.params.id)
    if (!user) {
        return next(new ErrorHandler(`User not found with id: ${req.params.id}`, 404))
    }
        
    await user.remove();
    res.json({
        message: "User deleted successfully",
        status: 200,
        data: data
    })
});

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    forgotPassword,
    resetPassword,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    getUser,
    updatePassword ,
    updateProfile
}