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
  let palCount = 0;
	for (let i = 0; i < str.length; i++) {
	  let count = 0;
	  for (let j = 0; j < str.length; j++) {
	    if (str[i] === str[j]) {
	      count++;
	    }
	  }
	  if (count % 2 === 1) {
	    palCount++;
	  }
	}
	if (palCount <= 1) {
	  return true;
	} else {
	  return false;
	}
}

module.exports = permPalin;