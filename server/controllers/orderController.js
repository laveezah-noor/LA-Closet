const orderSchema = require('../models/orderModel');
const catchAsyncError = require('../middelware/catchAsyncError');
const ErrorHandler = require('../utils/errorHandler');
const ApiFeature = require('../utils/apifeatures');
const ProductModel = require('../models/productModel');

// Create Order
const createOrder = catchAsyncError( async (req, res, next) => {
    const {
        orderItems, 
        shippingInfo, 
        itemsPrice, 
        taxPrice, 
        shippingPrice, 
        totalPrice, 
        paymentInfo} = req.body;
    const order = await orderSchema.create({
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo,
        paidAt: Date.now(),
        user: req.user.id
    });
    res.status(200).json({
        message: "Order created successfully",
        status: 200,
        data: order
    })
})
