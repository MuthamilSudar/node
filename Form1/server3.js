const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    // Read the HTML form from a file
    fs.readFile('form.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        // Set the appropriate headers for an HTML response
        res.writeHead(200, { 'Content-Type': 'text/html' });
        
        // Send the HTML form to the client
        res.end(data);
      }
    });
  } else {
    // Handle other requests or methods (e.g., form submission)
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
