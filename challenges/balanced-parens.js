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
  let count = 0;
//if string is has parentheses or brackets one most have another
//if string includes ( then it must also have )
//^ same with brackets
//make a counter to count the () and the [] and the {}
if(input.includes('(' && ')')) {
  return true;
} else if(input.includes('[' && ']')) {
  return true;
} else if(input.includes('{' && '}')) {
  return true;
} //else if((paren + square + curly) % 2 === 0) {
  //return true;
return false;
}


console.log( balancedParens('())'));

module.exports = balancedParens;
