const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let index in arr1) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let keyName in object1) {
    let value1 = object1[keyName];
    let value2 = object2[keyName];
    if (Array.isArray(value1) === true && Array.isArray(value2) === true) {
      if (eqArrays(object1[keyName],object2[keyName])) {
        return true;
      } else {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected) === true) {
    console.log(`✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};