const { Router } = require("express");
const { 
    getAllProducts, 
    createProduct, 
    updateProduct,
    deleteProduct,
    getProduct
} = require('../controllers/productController');
const { isAuthenticatedUser } = require("../middelware/authentication");

const router = Router();

router.route('/products').get(isAuthenticatedUser, getAllProducts);

router.route('/product/new').post(createProduct);

router.route('/product/:id').put(updateProduct);

router.route('/product/:id').delete(deleteProduct);

router.route('/product/:id').get(getProduct);

module.exports =  router;