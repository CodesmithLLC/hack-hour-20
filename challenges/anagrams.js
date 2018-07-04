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

// function anagrams(string) {
// 	let result = [];
//   if (string.length === 1) return [string];
//   for (let i = 0; i < string.length; i++) {
//     anagrams(string.slice(0, i) + string.slice(i+1)).forEach(el => {
// 			let combined = string[i] + el;
// 			result.push(combined);
//     });
// 	}
//   return result;
// }

function anagrams(string) {
	const resultArr = [];
	if(string.length === 1) return [string];
	for(let i = 0 ; i< string.length ; i++ ) {
		anagrams(string.substr(0,i)+string.slice(i+1)).forEach(str => {
			resultArr.push(string.charAt(i)+str);
		})
	}
	return resultArr;
}

module.exports = anagrams;
