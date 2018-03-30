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
	const checkRepeat = {};
	let	count = 0;
	str = str.replace(/\s/g,'').toLowerCase();
	for (let i = 0 ; i < str.length ; i++ ) {
		checkRepeat[str[i]] === undefined ? checkRepeat[str[i]] = 1 : checkRepeat[str[i]]++;
	}
	for(key in checkRepeat) {
		checkRepeat[key] === 1 ? count++ : null;
	}
	return count <= 1;
}

module.exports = permPalin;