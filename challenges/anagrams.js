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
  counter = 0
let arr = []
if(counter === string.length) return arr
for(let i = 0; i < string.length; i++) {
  arr.push(string)
    var swap = string.slice(1).split('').reverse().join('')
    var newStr = string[0] + swap
    arr.push(newStr)
    console.log(arr, newStr, string[i])
}
//to recurse with rotated string
}

module.exports = anagrams;
