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
  let length = str.length;
  let word = str.slice(0, (length/2));
  console.log(word);
  let unwanted = /[\W_]/g;
  let replacedStr = word.toLowerCase().replace(unwanted, '');
  let newStr = replacedStr.split('').reverse().join('');
  return word + ' ' + newStr || word + '_' + newStr ? true : false;
  //slice the in the middle of the split array
  //word = slice(0, (length/2))
  //lower case and replace the unwanted with
  // if(arr === str) {
  //   return true;
  // }
  // return false;
}

console.log(matchWord('__END_DNE-----'));
module.exports = matchWord;
