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

exports.getItem = (name) => {
    //return a book
    return books.find((book) => {
        return book.name === name;
    });
}