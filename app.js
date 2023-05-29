
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // console.log(req);
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter Massage</title><head>');
    const messages = fs.readFileSync('message.txt', 'utf8').split('\n');
    console.log(messages);
    for (const message of messages) {
      if (message.trim() !== '') {
        const formattedMessage = message.replace(/\+/g, ' ');
        res.write(`<div>${formattedMessage}</div>`);
      }
    }
    res.write('<body><form action="/massage" method="POST"><input type="text" name="massage"><button type="submit">send</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/massage' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split('=')[1];
      fs.writeFileSync('message.txt', message);
    });

    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Node Page</title><head>');
  res.write('<body><h1>Hello Sagar</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(4000);