const mongoose = require('mongoose');

const { Schema, model } =  require('mongoose');

const orderSchema = new Schema({
    shippingInfo:{
        address:{type: String, required: true},
        city:{type: String, required: true},
        country:{type: String, required: true},
        pinCode:{type: String, required: true},
        phoneNo:{type: String, required: true},
        orderItems:[
            {
                name:{type: String, required: true},
                quantity:{type: Number, required: true},
                image:{type: String, required: true},
                price:{type: Number, required: true},
                product:{
                    type: mongoose.Schema.ObjectId, 
                    ref: "Product", 
                    required: true},
            }
        ],
        user:{
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
        },
        paymentInfo:{
            id:{type: String},
            status:{type: String},
        },
        // can be made required later
        paidAt:{type: Date},
        itemsPrice:{type: Number, default: 0.0},
        taxPrice:{type: Number, default: 0.0},
        shippingPrice:{type: Number, default: 0.0},
        totalPrice:{type: Number, default: 0.0},
        orderStatus:{
            type: String,
            required: true,
            default: 'Processing',
        },
        deliveredAt:{type: Date},
        createdAt:{type: Date, default: Date.now},

    }
});

module.exports = model('Order', orderSchema);