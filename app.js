const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
// app.use((req, res, next) => {
//     console.log("in the middleware!");
//     next();
// });
app.use('/add-product', (req, res, next) => {
    res.send('<html><body><form action="/product" method="POST"><label>Product Name</label><input type="text" name="title"><label>Size</label><input type="number" name="size"><button type="submit">Add Product</button></form></body></html>');
});

// app.use((req, res, next) => {
//     console.log("in another middleware!");
//     res.send('<h1>Hello Fron Express!</h1>');
// });
app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello From Express</h1>');
});

app.listen(3000);










// const http = require('http');

// const routes = require('./routes');
// const server = http.createServer(routes);

// server.listen(3000);
// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {
//     const url = req.url;
//     if(url === "/sagar"){
//         res.write(`<html><body><div><h1>hi Sagar</h1></div></body></html>`);
//     }
//     console.log(url);
// })
// const message = fs.readFileSync("message.txt");
// console.log(message);
// server.listen(3000);