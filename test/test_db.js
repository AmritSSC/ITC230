const Book = require("../models/bookList.js");

Book.countDocuments((err, result) => {
    console.log(result);
});

// Book.find {}, (err, result) => {
//     //output errror if one occurred
//     if (err) {
//         console.log(err);
//     } else
//     //output array of document
//         console.log(results);
// }