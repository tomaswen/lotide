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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2) === true) {
    console.log('✅Your arrays match');
  } else {
    console.log('❌Your arrays does not match');
  }
};

const flatten = function(a) {
  let b = [];
  for (let i = 0; i < a.length; i++) {
    let element = a[i];
    if (Array.isArray(element) === false) {
      b.push(element);
    } else if (Array.isArray(element) === true) {
      for (let j = 0; j < element.length; j++)
        b.push(element[j]);
    }

  }
  return b;
};

assertArraysEqual(flatten([1,2,3,[4,5,6],7,8,[9]]),[1,2,3,4,5,6,7,8,9]);