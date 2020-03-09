const takeUntil = function(array, callback) {
  let result = [];
  for (let value of array) {
    if (callback(value)) {
      break;
    } else {
      result.push(value);
    }
  }
  return result;
};

module.exports = takeUntil;