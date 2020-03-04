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
  for (let index in arr1) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  }
  for ( let keyName in object1){
    let value1 = object1[keyName];
    let value2 = object2[keyName];
    if (Array.isArray(value1) === true && Array.isArray(value2) === true){
      if (eqArrays(object1[keyName],object2[keyName])){
        return true;
      }
      else{
        return false;
      }
    }
    else if (value1 !== value2) {
      return false;
    }
  }
  return true
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc),true); // => true
assertEqual(eqObjects(cd, cd2),false); // => false
assertEqual(eqObjects(abc,ab),false);