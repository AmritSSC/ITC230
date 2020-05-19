const expect = require("chai").expect;
const bookslist = require("../js/data");
//var assert = require('assert');

//test getItem()
describe('get Item', function() {
    it('Book exists in library', function() {
        let result = bookslist.getItem("Dracula");
        expect(result.name).to.equal("Dracula");
    });

    it('Book does not exist in library', function() {
        let result = bookslist.getItem("Hello world");

        expect(result).to.be.undefined;
    });

});

//test addItem()
describe('add Item', function() {

    testName = { name: 'The Little Prince', author: "Antoine de Saint-Exupéry", year: "1943", copyright: "no, Yes in Europe", description: "The Real Philosophy" }
    it('Book has been added', function() {
        let result = bookslist.addItem(testName);
        expect(result.added).to.be.true;
    });
    testName2 = { name: 'Dracula', author: "Bram Stroker", year: "1897", copyright: "No", description: "Blood thirst" };
    it('Book has not been added', function() {
        let result = bookslist.addItem(testName2);
        expect(result.added).to.be.false;

    });

});

//test deleteItem()
describe('delete Item', function() {
    // test that book got deleted:
    it('Book has been deleted', function() {
        let result = bookslist.deleteItem("Dracula");
        expect(result.deleted).to.be.true;
    });
    // test that book is not deleted:
    it('Book has not been deleted', function() {
        let result = bookslist.deleteItem("Red Dragon");
        expect(result.deleted).to.be.false;
    });
});