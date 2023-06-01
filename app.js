const express = require('express');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin');
const shopRouter = require('./routes/shop');
const fs = require("fs");
const path = require('path');
const contactRouter = require('./routes/contact-us')
const controller = require('./controller/products');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoute);
app.use(shopRouter);
app.use(contactRouter);

app.use(controller.error404)



app.listen(3000);


// app.use((req, res, next) => {
//     console.log("in the middleware!");
//     next();
// });
// app.use((req, res, next) => {
//     console.log("in another middleware!");
//     res.send('<h1>Hello Fron Express!</h1>');
// });







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