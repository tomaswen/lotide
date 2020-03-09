const countLetters = function(inputString) {

  let result = {};
  for (let char of inputString) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
};

module.exports = countLetters;
