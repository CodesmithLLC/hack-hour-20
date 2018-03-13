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

function balancedParens(input){
  var leftP = 0
  var rightP = 0
  var leftB = 0
  var rightB = 0
  var leftCB = 0
  var rightCB = 0
  var array = input.split('')
   for(var i = 0; i < input.length; i++) {
    if(input[i] === '(') leftP++;
    else if (input[i] === ')') rightP++;
    else if (input[i] === '[') leftB ++;
    else if (input[i] === ']') rightB++;
    else if (input[i] === '{') leftCB++;
    else if (input[i] === '}') rightCB++;
 }
 return ((leftP===rightP) && (leftB===rightB) && (leftCB===rightCB))
}

module.exports = balancedParens;
