const { Router } = require("express");
const { 
    registerUser,
    loginUser,
    getAllUsers,
    getUser,
    getUserById,
    logoutUser,
    forgotPassword,
    resetPassword,
    updatePassword,
    updateProfile,
    updateUser,
    deleteUser,
} = require('../controllers/userController');

const { 
    isAuthenticatedUser, 
    authorizeRoles } = require("../middelware/authentication");

const router = Router();

router.route('/admin/users')
.get(isAuthenticatedUser, authorizeRoles('admin'), getAllUsers);

router.route('/admin/user/:id')
.get(isAuthenticatedUser, authorizeRoles('admin'), getUserById)
.put(isAuthenticatedUser, authorizeRoles('admin'), updateUser)
.delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser);

router.route('/register').post(registerUser);

router.route('/login').post(loginUser);

router.route('/logout').get(logoutUser);

router.route('/password/forgot').post(forgotPassword);

router.route('/password/reset/:token').put(resetPassword);

router.route('/me').get(isAuthenticatedUser, getUser);

router.route('/me/update').put(isAuthenticatedUser, updateProfile);

router.route('/password/update').put(isAuthenticatedUser, updatePassword);

// router.route('/product/:id').delete(deleteProduct);

// router.route('/product/:id').put(updateProduct);

// router.route('/product/:id').delete(deleteProduct);

// router.route('/product/:id').get(getProduct);

module.exports =  router;