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

const balancedParens = (s) => { // no, use recursion. Doesn't work / need to keep track of how many lefts/rights also
  if (!s) return true;
  const open = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c.match(/[([{]/g)) {
      open.push(c);
    } else if (c.match(/[)}\]]/g)) {
      const d = open.pop();
      if (d === '(' && c !== ')') return false;
      if (d === '{' && c !== '}') return false;
      if (d === '[' && c !== ']') return false;
      if (d === undefined) return false;
    }
  }
  if (open.length > 0) return false;
  return true;
};

module.exports = balancedParens;
