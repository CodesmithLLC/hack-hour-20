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
function count(string){
    let curly = 0;
    let square = 0;
    let paren = 0;
    for (let i = 0 ; i < string.length; i++) {
        if ( string.charAt(i)==='{','}') {
            curly++;
        } else if (string.charAt(i) === '(',')') {
            paren++;
        } else if (string.charAt(i) === '[',']') {
            square++;
        }
    }
    return curly % 2 === 0 && paren % 2 === 0 && square % 2 === 0
}
function balancedParens(input){
    input = input.trim().split('').filter(el => el.match(/(\{|\}|\(|\)|\[|\])/gm)).join('');
    if(count(input)){
        if (input.match(/\{(\W+)\}/g)) {
            return count(input.match(/\{(\W+)\}/g)[0]);
        } else if (input.match(/\[(\W+)\]/g)) {
            return count(input.match(/\[(\W+)\]/g)[0]);
        } else if (input.match(/\((\W+)\)/g)) {
            return count(input.match(/\((\W+)\)/g)[0]);
        } else if(input.indexOf('{')>input.indexOf('}') || input.indexOf('[')>input.indexOf(']') || input.indexOf('(')>input.indexOf(')')) {
            return false;
        }
        return true;
    } else {
        return false;
    }
    
    // if ( input.indexOf('{') > input.indexOf('}') || input.indexOf('(') > input.indexOf(')') || input.indexOf('[') > input.indexOf(']')) {
    //     return false;
    // } else {
    //     return true;
    // }
}

console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}'));
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));
console.log(balancedParens('('));  // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));
module.exports = balancedParens;
