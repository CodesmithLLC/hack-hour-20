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

function balancedParens(input) {
    let openings = ["(", "[", "{"]; 
    let closings = [")", "]", "}"]; 
    let result = [];
    let foo = input.split('');
    for(let i = 0; i < foo.length; i++){
        if(openings.includes(foo[i])){
            result.push(foo[i]);
        }else if(closings.includes(foo[i]) && result[result.length-1] === openings[closings.indexOf(foo[i])]){
            result.pop(); 
        }
    }
    return result.length === 0; 
}
console.log("These should be true: ");
console.log(balancedParens('()')); // true
console.log(balancedParens('(())'));  // true
console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]')); // true
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true

console.log("These should be false: ");
console.log(balancedParens('('));  // false
console.log(balancedParens(')('));  // false
console.log(balancedParens('[(]{)}')); // false
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false


module.exports = balancedParens;
