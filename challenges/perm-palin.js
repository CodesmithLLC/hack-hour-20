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

// function permPalin(str) {
//   let result = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//   let j = 0;
//   let i = result.length - 1;
//   while (i >= result.length / 2) {
//     if (result.charAt(i) !== result.charAt(j)) return false;
//     i--;
//     j++;
//   }
//   return true;
// }

function permPalin(str) {
  let result = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('');
  const hash = result.reduce((accum, curr) => {
    // if doesnt exist, set value to 1. 
    if (accum[curr] === undefined) accum[curr] = 1;
    // otherwise set prop of obj to curr with a value of 1
    else delete accum[curr];
    return accum;
  }, {});
  return Object.keys(hash).length < 2;
}


console.log(permPalin('A man, a plan, a canal: Panama'));
console.log(permPalin('cbbaa'));
console.log(permPalin('cbac'));
console.log(permPalin('a'));

// * 	- permPalin('cbaba') //=> true
// * 	- permPalin('cbac') => false
// * 	- permPalin('a') => true);


module.exports = permPalin;
