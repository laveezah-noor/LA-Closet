const { Router } = require("express");
const { 
    registerUser,
    loginUser,
    getAllUsers,
    getUser,
    logoutUser,
    forgotPassword,
    resetPassword,
    updatePassword,
} = require('../controllers/userController');

const { 
    isAuthenticatedUser, 
    authorizeRoles } = require("../middelware/authentication");

const router = Router();

router.route('/users').get(getAllUsers);

router.route('/register').post(registerUser);

router.route('/login').post(loginUser);

router.route('/logout').get(logoutUser);

router.route('/password/forgot').post(forgotPassword);

router.route('/password/reset/:token').put(resetPassword);

router.route('/me').get(isAuthenticatedUser, getUser);

router.route('/password/update').put(isAuthenticatedUser, updatePassword);

// router.route('/product/:id').delete(deleteProduct);


module.exports =  router;// router.route('/product/:id').put(updateProduct);

// router.route('/product/:id').delete(deleteProduct);

// router.route('/product/:id').get(getProduct);

module.exports =  router;