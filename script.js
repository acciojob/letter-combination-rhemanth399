function letterCombinations(digits) {
    if (!digits) return []; // if the input is empty or null
    const mapping = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    let result = ['']; // array with a single empty string

    for (let i = 0; i < digits.length; i++) {
        const digit = digits[i];
        const letters = mapping[digit];
        const temp = [];

        for (let j = 0; j < letters.length; j++) {
            for (let k = 0; k < result.length; k++) {
                temp.push(result[k] + letters[j]);
            }
        }
        result = temp;
    }
    return result.sort();
}

module.exports = letterCombinations;
