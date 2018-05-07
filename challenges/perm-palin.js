/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str, overallCount = 0) {

  let match = str[0];
  let count = 0;
  let index;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === match && count === 0) {
      index = i;
      count++;
    } 
  }

  if (count === 0 && overallCount === 0) {
    if (str.length <= 1) {
      return true;
    } else {
      return permPalin(str.slice(1, str.length), overallCount + 1);
    }
  } else if (count === 0 && overallCount === 1) {
    if (str.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  return permPalin(str.slice(1, index) + str.slice(index+1, str.length), overallCount);
}

module.exports = permPalin;