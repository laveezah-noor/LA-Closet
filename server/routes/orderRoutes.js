const express = require('express');
const router = express.Router();
const { 
    createOrder, 
    getOrderById, 
    getAllOrders, 
    updateOrder, 
    deleteOrder, 
    myOrders} 
    = require('../controllers/orderController');

const { isAuthenticatedUser, authorizeRoles } = require("../middelware/authentication");

router.route("/order/new").post(isAuthenticatedUser, createOrder);

router.route("/order/:id").get(isAuthenticatedUser, authorizeRoles("admin"), getOrderById);

router.route("/orders/me").get(isAuthenticatedUser, myOrders);

router.route("/admin/orders").get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);

router.route("/admin/order/:id")
.put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)
.delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

module.exports = router;