const letterPositions = function(sentence) {
  const results = {};
  for (let char of sentence){
    results[char] = [];
    for (let charIndex in sentence){
      if (sentence[charIndex] === char){
        results[char].push(charIndex)
      }
    }
  }
  delete results[' '];
  return results;
};

let input = process.argv.splice(2).join(' ');
console.log(letterPositions(input))