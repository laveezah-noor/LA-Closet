const OrderModel = require('../models/orderModel');
const catchAsyncError = require('../middelware/catchAsyncError');
const ErrorHandler = require('../utils/errorHandler');
const ApiFeature = require('../utils/apifeatures');
const ProductModel = require('../models/productModel');

// Create Order
exports.createOrder = catchAsyncError( async (req, res, next) => {
    const {
        orderItems, 
        shippingInfo, 
        itemsPrice, 
        taxPrice, 
        shippingPrice, 
        totalPrice, 
        paymentInfo} = req.body;
    const order = await OrderModel.create({
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo,
        paidAt: Date.now(),
        user: req.user._id
    });
    res.status(200).json({
        message: "Order created successfully",
        status: 200,
        data: order
    })
})

exports.getOrderById = catchAsyncError( async (req, res, next) => {
    const order = await OrderModel.findById(req.params.id)
    .populate("user", "name email");

    if(!order){
        return next(new ErrorHandler("Order not found with this id", 404));
    }

    res.status(200).json({
        success: true,
        data: order
    })
})

// Get Loggedin User Order
exports.myOrders = catchAsyncError( async (req, res, next) =>{
    const orders = await OrderModel.find({user: req.user._id});
  
    res.status(200).json({
        success: true,
        data: orders
    }) 
}) 

// Get all orders
exports.updateOrder = catchAsyncError( async (req, res, next) =>{
    const order = await OrderModel.findById(req.params.id);
    
    if (order.orderStatus === "Delivered"){
        return next(new ErrorHandler("You have already delivered this order", 400));
    }
    order.orderItems.forEach( async item => {
        await updateStock(item.Product, item.quantity)
    });
    if(req.body.orderStatus === "Delivered"){
        order.deliveredAt = Date.now();
    }
    await order.save({validateBeforeSave: false});
    res.status(200).json({
        message: "Get Orders Successful",
        statusCode: 200,
        data: [order, totalAmount]
    }) 
}) 

async function updateStock(id, quantity){
    const product = await ProductModel.findById(id);
    product.stock = product.stock - quantity;
    await product.save({validateBeforeSave: false});
}

// Delete Order
exports.deleteOrder = catchAsyncError( async (req, res, next) =>{
    const order = await OrderModel.findById(req.params.id);
    if(!order){
        return next(new ErrorHandler("Order not found with this id", 404));
    }
    await order.remove();
    res.status(200).json({
        success: true,
        message: "Order deleted successfully"
    })
})