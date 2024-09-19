const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-products => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/add-products => POST
router.post('/add-product', adminController.postAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/edit-product => GET
router.get('/edit-product/:productId', adminController.getEditProduct);

// /admin/edit-product => POST
router.post('/edit-product', adminController.postEditProduct);

module.exports = router;