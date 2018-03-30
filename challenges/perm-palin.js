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
	var obj = {}
	var extraLetters = 0
	var newStr = str.toLowerCase()
	for(var i = 0; i < newStr.length; i++) {
		if(!obj[newStr[i]]) {
			obj[newStr[i]] = 1
		} else if((obj[newStr[i]]>0)) {
			obj[newStr[i]] ++
		}
 	}
 	for(var key in obj) {
	 if (obj[key] === 1) {
		 extraLetters++
	 }
}
	return (extraLetters < 2) ;
}

module.exports = permPalin;
