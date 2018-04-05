// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac",
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  // if character is a letter, keep going until there's not a letter and then save that string into our stack
  let stack = [];
  let char = '';
  let word = '';
  for (let i = 0; i < str.length; i++) {
    char = str.charAt(i);
    if (str.charAt(i).match(/[a-z]/i)) {
      word += str.charAt(i)
    } else if (word.length !== 0) {
      stack.push(word)
      console.log(str.length)
      word = '';
    }
  }
  console.log(stack, )
  if (stack.length % 2 !== 0) return false;
  for (let j = 0; j < stack.length; j++) {
    let first = stack.pop();
    let second = stack.pop();
    if (second) {
      if (first.toLowerCase() !== second.split('').reverse().join('').toLowerCase()) return false;
    }
  }
  return !stack.length;
}

console.log(matchWord('__END_DNE-----')); //-> true
console.log(matchWord('__ENDDNE__'));   //-> false       (not separated by a space)
//
console.log(matchWord('IF()()fi[]'));  //-> true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi'));  //-> false     not properly closed. like ( [) ]
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));  //-> true
matchWord(''); // -> true

module.exports = matchWord;
