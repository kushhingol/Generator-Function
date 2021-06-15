'use strict';

var expect = require('chai').expect;
var getIterableArray = require("../index.ts");


describe('#getIterableArray', () => {
    it('should return generator object on passing array', () => {
        const result = getIterableArray([1,2,3,4]);
        expect(result[1]).to.equal(2)
    })
})