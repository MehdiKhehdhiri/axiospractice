const fs = require('fs');
const http = require('http');
const axios = require('axios');

fs.writeFile('example.txt', 'Hello, le contenu du fichier!', (err) => {
    if (err) throw err;
    console.log('File created successfully');


fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File content:', data);
      });
});

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World</h1>');
  });

server.listen(8000, 'localhost', () => {
    console.log('Server is running at http://localhost:8000/');
});

axios.get('http://www.google.com/')
  .then(response => {
    const htmlContent = `<html><head><title>Google Page</title></head><body>${response.data}</body></html>`;
    
    fs.writeFile('google.html', htmlContent, (err) => {
      if (err) throw err;
      console.log('HTML file created successfully');
    });
  })
  .catch(error => {
    console.error('Error fetching Google page:', error);
});



