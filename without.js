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

const assertArraysEqual = function(arr1, arr2){
  if (eqArrays(arr1,arr2) === true){
    console.log ('✅Your arrays match')
  }
  else {
    console.log ('❌Your arrays does not match')
  }
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

assertArraysEqual(without([1,2,3,4,5,5,6,2],[5,2]),[1,3,4,6]);

