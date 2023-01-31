function letterCombinations(input) {
    
  let mapping = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
  };
  let result = [''];
  for (let i = 0; i < input.length; i++) {
    let digit = input[i];
    let letters = mapping[digit];
    let newResult = [];
    for (let j = 0; j < letters.length; j++) {
      for (let k = 0; k < result.length; k++) {
        newResult.push(result[k] + letters[j]);
      }
    }
    result = newResult;
  }
  return result.sort();
}



module.exports = letterCombinations;
