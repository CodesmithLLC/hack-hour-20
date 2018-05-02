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
  let opens = [];
  for (let i = 0; i < input.length; i++) {
    if (count < 0) {
      return false;
    }
    if (input[i] === "{" || input[i] === "[" || input[i] === "(") {
      count++;
      opens.push(input[i]);
    } 
    else if (input[i] === "}" || input[i] === "]" || input[i] === ")") {
      if (opens[opens.length - 1] === "{" && input[i] !== "}") {
        return false;
      } else if (opens[opens.length - 1] === "[" && input[i] !== "]") {
        return false;
      } else if (opens[opens.length - 1] === "(" && input[i] !== ")") {
        return false;
      } else {
      count--;
      opens.pop();
      }
    } 
  }
  if (count === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = balancedParens;
