const bookslist = require("./js/data");

// const http = require("http");
// const fs = require("fs");
//
/*Assignment 1 Code start
// http.createServer((req, res) => {
//     const path = req.url.toLowerCase();
//     switch (path) {
//         case '/':
//             var bookslisted = bookslist.getAll();
//             res.writeHead(200, { 'Content-Type': 'text/plain' });
//             res.end("Number of books in our inventory: " + bookslisted.length.toString());
//             break;

//         case '/about':
//             fs.readFile("./html/about.html", (err, data) => {
//                 if (err) return console.error(err);
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.end(data.toString());
//             });
//             break;

//         default:
//             res.writeHead(404, { 'Content-Type': 'text/plain' });
//             res.end('Not found');
//             break;
//     }
// }).listen(process.env.PORT || 3000);
Assignment 1 Code end
*/


//  /*Assignment 2 Start
'use strict'
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const app = express();

// main application via configurations
app.engine('handlebars', exphbs({ defaultLayout: false }));
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);
//app.use(express.static(__dirname + '/public')); // set location for static files
app.use(bodyParser.urlencoded({ extended: true })); // parse form submissions

//Route Handling - use app.get(), or app.post(), and error handling with app.use()
// send static file as response
app.get('/', (req, res) => {
    //     console.log(req.query);
    let bookslisted = bookslist.getAll();
    res.render('home', { books_list: bookslisted });

});

app.get('/details', (req, res) => {
    //get details only of book selected:
    let book_info = bookslist.getItem(req.query.item);
    res.render('details', { item: req.query.item, book_data: book_info });
});

// send plain text response
app.get('/home', (req, res) => {
    //res.type('text/plain');
    //res.send('About page');
    res.type('text/html');
    res.sendFile(__dirname + '/html/home.html');
});

app.get('/about', (req, res) => {
    //res.type('text/plain');
    //res.send('About page');
    res.type('text/html');
    res.sendFile(__dirname + '/html/about.html');
});


// define 404 handler
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
});

// web server start:
app.listen(app.get('port'), () => {
    console.log('Express started');
});


// Assignment 2 End */