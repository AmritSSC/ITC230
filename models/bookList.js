const mongoose = require('mongoose');

// remote db connection settings. For security, connectionString should be in a separate file not committed to git
// const connectionString = "mongodb+srv://dbuser:dbuser@cluster0-pbepf.mongodb.net/test?retryWrites=true&w=majority";

// local db connection settings 
// const ip = process.env.ip || '127.0.0.1';
// const connectionString = 'mongodb://' +ip+ '/<DB_NAME>';

const credentials = {
    connectionString: "mongodb+srv://dbuser:dbuser@cluster0-pbepf.mongodb.net/test?retryWrites=true&w=majority"
}; // done this way to add more credentials, string can be used also

mongoose.connect(credentials.connectionString, { dbName: 'sccprojects', useNewUrlParser: true });

mongoose.connection.on('open', () => {
    console.log('Mongoose connected.');
});

// define Book model in JSON key/value pairs
// values indicate the data type of each key
const mySchema = mongoose.Schema({
    title: { type: String, required: true },
    author: String,
    year: Number,
    copyright: String,
    description: String
});

module.exports = mongoose.model('Book', mySchema, 'BookList');