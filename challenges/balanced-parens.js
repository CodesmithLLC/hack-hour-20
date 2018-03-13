/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

 // comparing all of the following characters will be [ ['[',']' ],[ '{','}' ],[ '(',')'] ];

function balancedParens(input){
    let firstSym = ['[', '{', '('];
    let secSym = [']', '}', ')'];
    let newArr = [];
    for (let i = 0; i < input.length; i++) {
      if(firstSym.includes(input[i])) {
        newArr.push(input[i]);
        console.log(newArr);
      } // now have to check for the secSym characters at the index of input.length
        for (let j = input.length-1; j > 0; j--) {
        
      }
      return true;
  }
}
(balancedParens('[](){}'));
// console.log(balancedParens('[({})]'));
module.exports = balancedParens;
