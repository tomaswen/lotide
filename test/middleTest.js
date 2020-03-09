const assert = require('Chai').assert;
const middle = require('../middle');

describe('#middle',() => {
  it('returns 2 of [1,2,3]', () => {
    assert.equal(middle([1,2,3]),2);
  });
  it('returns 3 of [1,2,3,4,5]', () => {
    assert.equal(middle([1,2,3,4,5]),3);
  });
  it('fails to return [2,3] of [1,2,3,4]', () => {
    assert.notEqual(middle([1,2,3,4]),2);
  });
  it('returns [3,4] of [1,2,3,4,5,6]', () =>{
    assert.deepEqual(middle([1,2,3,4,5,6]),[3,4]);
  });
});