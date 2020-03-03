const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const middle = function(array) {
  let result = [];
  let middleIndex = Math.floor(array.length / 2);
  if (array.length === 1 || array.length === 2) {
    return result;
  } else if (array.length % 2 !== 0) {
    result.push(array[middleIndex]);
    return result;
  } else {
    result.push(array[middleIndex - 1]);
    result.push(array[middleIndex]);
    return result;
  }

};

assertEqual(eqArrays(middle([1,2,3]),[2]),true);
assertEqual(eqArrays(middle([1,2,3,4,5]),[3]),true);
assertEqual(eqArrays(middle([1,2,3,4]),[2]),false);
assertEqual(eqArrays(middle([1,2,3,4]),[2,3]),true);
assertEqual(eqArrays(middle([1,2,3,4,5,6]),[3,4]),true);
assertEqual(eqArrays(middle([1,2,3,4,5,6]),[2]),false);