const findKeyByValue = function(searchObject, searchValue) {
  for (let key in searchObject) {
    if (searchObject[key] === searchValue) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
