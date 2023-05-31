const express = require('express');

const router = express.Router();

router.use('/add-product', (req, res, next) => {
    res.send('<html><body><form action="/admin/add-products" method="POST"><label>Product Name</label><input type="text" name="title"><label>Size</label><input type="number" name="size"><button type="submit">Add Product</button></form></body></html>');
});

router.use('/add-products', (req, res, next) => {
    console.log(req.body);
    res.redirect('/shop');
});

module.exports = router;