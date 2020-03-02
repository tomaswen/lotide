const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let newArr = arr;
  newArr.shift();
  return newArr;
};


const result = tail(["Hello", "Tomas", "Wen", "Good morning"]);
assertEqual(result.length, 3); 
assertEqual(result[0], "Tomas"); 
assertEqual(result[1], "Wen"); 
assertEqual(result[2], "Good morning"); 