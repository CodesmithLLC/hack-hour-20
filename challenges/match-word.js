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

const matchWord = str => {
  const words = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/gi)) {
      words.push([str[i], i])
    }
  }
  for (let j = 0; j < words.length; j++) {
    if (words[j][0] !== words[words.length - (j + 1)][0] || words[j][1] === words[words.length - (j + 1)][1] + 1) {
    return false
    }
  }
  return true;
};

module.exports = matchWord;

// function matchWord(str) {
//     var newStr = str.toLowerCase().replace(/[^a-zA-Z]+/g, '');
//     for (let i = 0; i < newStr.length / 2; i++) {
//         if (newStr[i] !== newStr[newStr.length -(i+1]) return false;
//     }
//     return true;
// }


