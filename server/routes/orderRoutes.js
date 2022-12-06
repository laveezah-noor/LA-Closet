const express = require('express');
const router = express.Router();
const { 
    createOrder, 
    getOrder, 
    getAllOrders, 
    updateOrder, 
    deleteOrder } 
    = require('../controllers/orderController');

const { isAuthenticatedUser, authorizeRoles } = require("../middelware/authentication");

router.route("/order/new").post(createOrder);

module.exports = router;