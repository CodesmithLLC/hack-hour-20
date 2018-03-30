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
    if (typeof str !== 'string') return 'not a valid input'  //checking for string data type
    if (str.length === 0  || str.length === 1) return true //automatic palindrome
      let stack = []; //place to store characters
      for (let i = 0; i < str.length; i++) {
         console.log(str[i].toLowerCase());
          if (stack.includes(str[i].toLowerCase())) {
              let idx = stack.indexOf(str[i])
              stack.splice(idx, 1);
          } else {
              stack.push(str[i].toLowerCase())
          }
  
      }
      return (stack.length === 0 || stack.length === 1)
  }

console.log(permPalin('abab'))

module.exports = permPalin;