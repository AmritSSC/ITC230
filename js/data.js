let books = [
    { name: 'Dracula', author: "Bram Stroker", year: "1897", copyright: "No", description: "Blood thirst" },
    { name: 'The Adventures of Tom Sawyer', author: "Mark Twain", year: "1875", copyright: "No", description: "Young Lust" },
    { name: 'The Mysterious Affair at Styles', author: "Agatha Christie", year: "1920", copyright: "No", description: "Kinda bloodlust" },
    { name: 'Around the World in Eighty Days', author: "Jules Verne", year: "1872", copyright: "No", description: "Explore" },
    { name: 'The Silence of the Lambs', author: "Thomas Harris", year: "1988", copyright: "Yes", description: "Another Blood thirst" },
];

//exports.getAll = books

//ES6 module:
//export const getAll = books

exports.getAll = () => {
    // return a book by title
    return books;
}

// extra credit: assignment 2
exports.getItem = (name) => {
    //return a book
    return books.find((book) => {
        return book.name === name;
    });
}

//Start of Assignment 3:
exports.addItem = (bookToAdd) => {

    // book added mustbean object, so find the name attribute of object
    let foundBook = books.findIndex((book) => {
        return book.name === bookToAdd.name;
    });

    //add book if name doesn't exist
    if (foundBook < 0) {
        books.push({ bookToAdd });

    }
    //return status of book existance
    return { added: foundBook < 0 };

}


exports.deleteItem = (bookToDelete) => {
    //find book to delete by name
    let foundIndex = books.findIndex((book) => {
        return book.name === bookToDelete;
    });
    // if book exists:
    if (foundIndex > -1) {
        books.splice(foundIndex, 1);
    }
    //return proof of book existance
    return { deleted: foundIndex > -1 };
}