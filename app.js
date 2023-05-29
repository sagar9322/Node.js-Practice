
const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if(url === '/home'){
    res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Enter Massage</title><head>');
  res.write('<body><form action="/massage" method="POST"><input type="text" name="massage"><button type="submit">send</button></form></body>');
  res.write('</html>');
  return res.end("Welcome Home");
  }
  if(url === '/about'){
    res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Enter Massage</title><head>');
  res.write('<body><form action="/massage" method="POST"><input type="text" name="massage"><button type="submit">send</button></form></body>');
  res.write('</html>');
  return res.end("Welcome to about us page");
  }
  if(url === '/node'){
    res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Enter Massage</title><head>');
  res.write('<body><form action="/massage" method="POST"><input type="text" name="massage"><button type="submit">send</button></form></body>');
  res.write('</html>');
  return res.end("Welcome to my Node Js project");
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Node Page</title><head>');
  res.write('<body><h1>Hello Sagar</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(4000);