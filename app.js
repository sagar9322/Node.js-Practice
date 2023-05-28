
const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Hi Sagar');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Sagar');
});

server.listen(4000);