const http = require('http');

const hostname = '127.0.0.1';

const server8080 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World 8080');
});

const server3000 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World 3000');
});

server8080.listen(8080, hostname, () => {
  console.log(`Server running at http://${hostname}:8080/`);
});

server3000.listen(3000, hostname, () => {
  console.log(`Server running at http://${hostname}:3000/`);
});