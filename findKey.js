const findKey = function(obj,callback) {
  for (let keys in obj) {
    if (callback(obj[keys])) {
      return keys;
    }
  }
};

module.exports = findKey;
