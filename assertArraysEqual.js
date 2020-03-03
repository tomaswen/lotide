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
    console.log ('Your arrays match')
  }
  else {
    console.log ('Your arrays does not match')
  }
};