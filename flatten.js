const flatten = function(a) {
  let b = [];
  for (let i = 0; i < a.length; i++) {
    let element = a[i];
    if (Array.isArray(element) === false) {
      b.push(element);
    } else if (Array.isArray(element) === true) {
      for (let j = 0; j < element.length; j++)
        b.push(element[j]);
    }

  }
  return b;
};
module.exports = flatten;