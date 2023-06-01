const express = require('express');
const router = express.Router();
// const path = require('path');
// const rootDir = require('../util/path');
const contatUsController = require('../controller/products');


router.get('/contact-us', contatUsController.contactUs);
router.use('/submit', contatUsController.contactUsSubmit);
module.exports = router;