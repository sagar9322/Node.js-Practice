const express = require('express');
// const path = require('path');
// const rootDir = require('../util/path');
const shopController = require('../controller/products');

const router = express.Router();

router.get('/', shopController.shop);

module.exports = router;