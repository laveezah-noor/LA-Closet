const catchAsyncError = require('../middelware/catchAsyncError');
const ProductModel = require('../models/productModel');
const ApiFeature = require('../utils/apifeatures');
const ErrorHandler = require('../utils/errorHandler');

const ProductData = {
    "title": "Product 1",
    "summary": "Product 1 description",
    "price": 100,
    "category": "category 1",
    "images": {
        "public_id": "sample_id",
        "url": "sample_url"
    }    
}

const createProduct = catchAsyncError( async (req, res, next) => {
    // const product = await ProductModel.create(req.body);
    req.body.user = req.user.id;
    console.log(req.body)
    ProductModel.create(req.body, (err, data) =>{
        if(!err){
            res.json({
                message: "Product created successfully",
                status: 200,
                data: data
            })
        } else {
            res.json({
                message: "Product creation failed",
                status: 404,
                data: err.message
            })
        }
    });
})

const getAllProducts = catchAsyncError( async (req, res, next) => {  
    const productCount = await ProductModel.countDocuments();
    const apiFeature = new ApiFeature( ProductModel, req.query)
    .search()
    .filter()
    .pagination(1);
    const products = await apiFeature.query;
    // products();
    res.status(200).json({
        message: "Product shown successfully",
        status: 200,
        data: products,
        productCount: productCount
    })
})

const updateProduct = catchAsyncError( async (req, res, next) => {
    let product = await ProductModel.findById(req.params.id);
    if(product){
        ProductModel.findByIdAndUpdate(
            req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        }, (err,data)=>{
            if(!err){
                res.json({
                    message: "Product updated successfully",
                    status: 200,
                    data: data
                })
            } else{
                res.json({
                    message: "Product updation failed",
                    status: 404,
                    data: err.message
                })
            }
        })
    }else{
        res.json({
            message: "Product updation failed",
            status: 404
        })
    }
})

const deleteProduct = async (req, res, next) => {
    let product = await ProductModel.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product deletion failed", 404))
    }
    if(product){
        product.remove((err,data)=>{
            res.json({
                message: "Product deleted successfully",
                status: 200,
                data: data
            })
        });
    } 
}

const getProduct = async (req, res, next) => {
    await ProductModel.findById(
        req.params.id,
        (err, data)=>{
            if(!err){
                res.json({
                    message: "Product found successfully",
                    status: 200,
                    data: data
                })
            } else {
                res.json({
                    message: "Product not found/failed",
                    status: 404,
                    data: err.message
                })
            } 
        }).clone();
}

const createProductReview = catchAsyncError( async (req, res, next) => {

    const {rating, comment, productId} = req.body;
    const review = {
    user: req.user.id,
    name: req.user.name,
    rating: Number(req.body.rating),
}

const product = await ProductModel.findById(productId);
const isReviewed = product.reviews.find(rev => rev.user.toString() === req.user.id.toString()); 
if(isReviewed){
    product.reviews.forEach(review => {
        if(review.user.toString() === req.user.id.toString()){
            review.comment = comment;
            review.rating = rating;
        }
    })
}
else{
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
    product.ratings = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;
    await product.save({validateBeforeSave: false});
    res.status(200).json({
        success: true
    })
}

})

const getProductReviews = catchAsyncError( async (req, res, next) => {
    const product = await ProductModel.findById(req.query.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 404))
    }
    res.status(200).json({
        success: true,
        data: product.reviews
    });
})

const deleteProductReview = catchAsyncError( async (req, res, next) => {
    const product = await ProductModel.findById(req.query.productId);

    if(!product){
        return next(new ErrorHandler("Product not found", 404))
    }
    const reviews = product.reviews.filter(rev => rev._id.toString() !== req.query.id.toString());

    const numOfReviews = reviews.length;
    const ratings = product.reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length;

    await Product.findByIdAndUpdate(req.query.productId, {
        reviews,
        ratings,
        numOfReviews
    }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
        data: reviews
    })
})

module.exports = {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    getProduct,
    createProductReview,
    getProductReviews,
    deleteProductReview
}