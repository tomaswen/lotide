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

const without = function(original, toRemove) {
  let result = original;
  let arr = toRemove;
  for (let i = 0; i < arr.length; i++) {
    let wordToRemove = arr[i];
    for (let j = result.length - 1; j >= 0; j--) {
      if (result[j] === wordToRemove) {
        result.splice(j,1);
      }
    }
  }
  return result;
};



