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
 *  balancedParens('[(]{)}'); // false +2 +1 -2 + 3 -1 -3
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
let stringArr = input.split('');
let bracketObj = {'(': 1, ')': -1, '[': 2, ']' : -2, '{' : 3, '}': -3};
let bracketCount = 0;
for(let i = 0; i < stringArr.length; i++){
    if(bracketObj.hasOwnProperty(stringArr[i])){
        bracketCount += bracketObj[stringArr[i]];
    }
    if(bracketCount < 0){
        bracketCount += -20; //making it super negative to force a false;
    }
}
if(bracketCount !== 0){
    return false;
}else{
    return true;
}
}

module.exports = balancedParens;
console.log(balancedParens('[(]{)}'));  // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false