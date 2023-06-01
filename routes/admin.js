const express = require('express');
// const path = require('path');
const router = express.Router();
// const rootDir = require('../util/path');
const adminController = require('../controller/products');

router.use('/add-product', adminController.addProducts);

module.exports = router;