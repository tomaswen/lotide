const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let keyName in object1) {
    let value1 = object1[keyName];
    let value2 = object2[keyName];
    if (typeof value1 === 'object' && typeof value2 === 'object' && !Array.isArray(value1) && !Array.isArray(value2)){
      let result = eqObjects(value1, value2);
      if (!result){
        return false
      }
    }
    else if (Array.isArray(value1) === true && Array.isArray(value2) === true) {
      if (eqArrays(object1[keyName],object2[keyName])) {
        return true;
      } else {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects

