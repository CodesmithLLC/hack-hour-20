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
//
// function balancedParens(input){
//   JSON.parse(input)
// }

// STEP #1 (Working with normal parens)

function balancedParens1 (input) {
  for (let i = 0; i < input.length / 2; i++) {
    if (input[i] === '(' && input[input.length - i - 1] !== ')') return false;
    if (input[i] === ')') return false;
  }
  return true;
}

// console.log(balancedParens1('('))  // false
// console.log(balancedParens1('()')) // true
// console.log(balancedParens1(')('))  // false
// console.log(balancedParens1('(())'))  // true
//
// function balancedParens (input) {
//   for (let i = 0; i < input.length / 2; i++) {
//     if (input[i] === '(' && input[input.length - i - 1] !== ')') return false;
//     if (input[i] === ')') return false;
//     if (input[i] === '[' && input[input.length - i - 1] !== ']') return false;
//     if (input[i] === ']') return false;
//     if (input[i] === '{' && input[input.length - i - 1] !== '}') return false;
//     if (input[i] === '}') return false;
//   }
//   return true;
// }



console.log(balancedParens('[](){}')) // true
console.log(balancedParens('[({})]'))   // true
console.log(balancedParens('[(]{)}')) // false


function balancedParens (s, i = 0) {
  let first = [], el;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === '(' || s.charAt(i) === '[' || s.charAt(i) === '{')  first.push(s.charAt(i));
    else if (s.charAt(i) === ')') {
      el = first.pop;
      if (el !== '(') return false;
    } else if (s.charAt(i) === ']') {
        el = first.pop;
        if (el !== '[') return false;
    } else if (s.charAt(i) === '}') {
        el = first.pop;
        if (el !== '{') return false;
    }


  }
  return true;

}

console.log(balancedParens('[](){}')) // true
// console.log(balancedParens('[({})]'))   // true
// console.log(balancedParens('[(]{)}')) // false

console.log(balancedParens)
module.exports = balancedParens;
