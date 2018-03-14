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
    let target;
   for (let i = 0; i < input.length; i++) {
       if (target !== undefined) {
           if (input[i] === '(' || input[i] === '{' || input[i] === '[') {
               inner(input[i]);
               continue;
           }
           if (input[i] !== '(' || input[i] !== '{' || input[i] !== '[' || input[i] !== ']' || input[i] !== ')' || input[i] !== '}') {
            continue;
        }
           console.log(input[i] ,'input');
           console.log(target, 'target')
           if (input[i] === target){
               target = undefined;
               continue;
           } else {
               return false;
           }
       }

  function inner (input) {  
    if (input === '(')  {
        target = ')';
        
    } 

    if (input === '[') {
        target = ']'
    
    }
    if (input === '{') {
        target = '}'
    }
}   
inner(input[i]);
    }
   return false;
}

console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));

module.exports = balancedParens;
