const http = require("http");
const fs = require("fs");
const bookslist = require("./js/data");

http.createServer((req, res) => {
    const path = req.url.toLowerCase();
    switch (path) {
        case '/':
            var bookslisted = bookslist.getAll();
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("Number of books in our inventory: " + bookslisted.length.toString());
            break;

        case '/about':
            fs.readFile("./html/about.html", (err, data) => {
                if (err) return console.error(err);
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data.toString());
            });
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not found');
            break;
    }
}).listen(process.env.PORT || 3000);