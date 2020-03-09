const middle = function(array) {
  let middleIndex = Math.floor(array.length / 2);
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 !== 0) {
    return [array[middleIndex]];
  } else {
    return [array[middleIndex - 1], array[middleIndex]];
  }

};

module.exports = middle;

