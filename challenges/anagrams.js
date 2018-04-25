/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {
  let output = [];
  if (string.length === 1) {
    output.push(string[0]);
    return output;
  }
  if (string.length === 0) {
    output.push('');
    return output;
  }
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
      let newStr = string[i];
      
      if (j < i) {
        newStr = newStr + string.slice(j, i) + string.slice(i + 1, string.length) + string.slice(0, j);
        let count = 0;
        for (let k = 0; k < output.length; k++) {
          if (output[k] === newStr) {
            count++;
          }
        }
        if (count === 0) {
            output.push(newStr);
        }
        
      } else if (j > i) {
        newStr = newStr + string.slice(j, string.length) + string.slice(0, i) + string.slice(i + 1, j);
        let count = 0;
        for (let k = 0; k < output.length; k++) {
          if (output[k] === newStr) {
            count++;
          }
        }
        if (count === 0) {
            output.push(newStr);
        }

      }
    }
  }
  return output;
}
module.exports = anagrams;
