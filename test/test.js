var assert = require('assert');

describe('Array tests', function() {
    describe('#test indexof method', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });

    describe('test length propertymethod', function() {
        it('should have length', function() {
            assert.equal([1, 2, 3].length, 3);
        });
    });
});