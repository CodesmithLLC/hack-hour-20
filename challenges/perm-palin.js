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

function permPalin(str) {
  let count = {};
  let pHolder = 0;
  for(let i = 0; i < str.length; i++) {
    letters = str[i];
    count[letters] = count[letters] || 0;
    count[letters]++
  }
  for(let counter in count) {
    pHolder += count[letters] %2;
  }
	return pHolder < 2;
}

console.log(permPalin('cB,aba'));
console.log(permPalin('cbaba'));
console.log(permPalin('abab'));
console.log(permPalin('cbac'));
console.log(permPalin('a'));
module.exports = permPalin;