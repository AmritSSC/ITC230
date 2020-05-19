const expect = require("chai").expect;
//var assert = require('assert');

let result = { "title": "dune", author: "frank herbert", pubdate: 1969 }

describe('#test indexof method', function() {
    it('some different message', function() {
        expect(result).to.deep.equal({ title: "dune", author: "frank herbert", pubdate: 1969 });
    });
});