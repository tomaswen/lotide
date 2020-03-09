const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2) === true) {
    console.log(`✅Your arrays match: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`❌Your arrays does not match: [${arr1}] !== [${arr2}]`);
  }
};

module.exports = assertArraysEqual;