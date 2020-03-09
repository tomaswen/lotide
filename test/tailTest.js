const assert = require('Chai').assert;
const tail = require('../tail');

describe('#tails:', () => {
  it('should return [tomas,wen,good morning] of [hello,tomas,wen,good morning]', () => {
    assert.deepEqual(tail(["Hello", "Tomas", "Wen", "Good morning"]), ["Tomas", "Wen", "Good morning"]);
  });
});