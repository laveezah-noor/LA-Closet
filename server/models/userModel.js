const mongoose = require('mongoose');
const { Schema, model } =  require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Please enter your name'],
        maxLength: [30, 'Your name cannot exceed 30 characters'],
        minLength: [4, 'Your name cannot be less than 3 characters'],
    },
    email:{
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        validate: [isEmail, 'Please enter a valid email address'],
    },
    password:{
        type: String,
        required: [true, 'Please enter your password'],
        minLength: [5, 'Your password cannot be less than 6 characters'],
        select: false,
    },
    avatar:{
        public_id:{
            type: String,
            required: true,
        } ,
        url:{
            type: String,
            required: true,
        }
    },
    role:{
        type: String,
        default: 'user',
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

userSchema.pre("save", async function(next){
    if(!this.isModified('password')){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

// JwtToken
userSchema.methods.getJwtToken = function(){
    return jwt.sign({id: this._id}, 
        process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRES_TIME,
    });
}

// Compare Password
userSchema.methods.comparePassword = async function(enteredPassword){
    // console.log(enteredPassword, await bcrypt.compare(enteredPassword, this.password));
    return await bcrypt.compare(enteredPassword, this.password);
    }

// Generate Password Reset Token
userSchema.methods.getResetPasswordToken = function(){
    // Generate Token
    const resetToken = crypto.randomBytes(20).toString('hex');
    // Hash and set to resetPasswordToken
    this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
    // Set token expire time
    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;
    return resetToken;
}

module.exports = model('User', userSchema);