const { Router } = require("express");
const { 
    registerUser,
    loginUser,
    getAllUsers
} = require('../controllers/userController');

const router = Router();

router.route('/users').get(getAllUsers);

router.route('/register').post(registerUser);

router.route('/login').post(loginUser);

// router.route('/product/:id').put(updateProduct);

// router.route('/product/:id').delete(deleteProduct);

// router.route('/product/:id').get(getProduct);

module.exports =  router;