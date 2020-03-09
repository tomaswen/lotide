const without = function(original, toRemove) {
  let result = original;
  let arr = toRemove;
  for (let remove of arr) {
    let wordToRemove = remove;
    for (let j = result.length - 1; j >= 0; j--) {
      if (result[j] === wordToRemove) {
        result.splice(j,1);
      }
    }
  }
  return result;
};

module.exports = without;

