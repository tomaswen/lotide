const letterPositions = function(sentence) {
  const results = {};
  for (let char of sentence) {
    results[char] = [];
    for (let charIndex in sentence) {
      if (sentence[charIndex] === char) {
        results[char].push(charIndex);
      }
    }
  }
  delete results[' '];
  return results;
};

module.exports = letterPositions;
