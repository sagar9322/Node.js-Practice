const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');


router.get('/contact-us', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
});
router.use('/submit', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'form-submit.html'));
});
module.exports = router;