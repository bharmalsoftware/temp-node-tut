const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url == '' || url == '/') {
        res.write('This is HTTP server');
        res.end()
    }
    if (url === '/about') {
        res.write('About Us')
        res.end()
    }
    res.end('<h1> Bad Request</h1>')
})

server.listen(5000);