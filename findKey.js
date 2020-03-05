const findKey = function(obj,callback) {
  for (let keys in obj) {
    if (callback(obj[keys])) {
      return keys;
    }
  }
};

let answer = findKey({
  "Blue Hill": { stars: 1 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akaleri":   { stars: 3 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // 
let answer1 = findKey({
  "Blue Hill": { stars: 1 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akaleri":   { stars: 3 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3); // 
let answer2 = findKey({
  "Blue Hill": { stars: 1 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akaleri":   { stars: 3 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5); //
//testing
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(answer,'noma');
assertEqual(answer1,'elBulli');
assertEqual(answer2,undefined);