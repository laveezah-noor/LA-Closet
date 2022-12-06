const { Router } = require("express");
const { 
    getAllProducts, 
    createProduct, 
    updateProduct,
    deleteProduct,
    getProduct
} = require('../controllers/productController');
const { isAuthenticatedUser, authorizeRoles } = require("../middelware/authentication");

const router = Router();

router.route('/products').get(isAuthenticatedUser, getAllProducts);

router.route('/product/new').post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

router
.route('/admin/product/:id')
.put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
.delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

router.route('/product/:id').get(getProduct);

module.exports =  router;