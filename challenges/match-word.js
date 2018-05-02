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
  if (str === '') {
    return true;
  }
  const wordArray = [];
  const pattern=/^[a-zA-Z]*$/;
  let onWord = false;
  let firstIndex;
  let lastIndex;
  for (let i = 0; i < str.length; i++) {
    if (pattern.test(str[i])) {
      if (onWord === false && i !== str.length - 1) {
        firstIndex = i;
        onWord = true;
      } else if (onWord === true && i === str.length - 1) {
        lastIndex = i;
        wordArray.push(str.slice(firstIndex, lastIndex + 1));
      }
    } else {
      if (onWord === true) {
        lastIndex = i;
        wordArray.push(str.slice(firstIndex, lastIndex));
        onWord = false;
      }
    }
  }
  let orderArray = [wordArray[0]];
  for (let j = 1; j < wordArray.length; j++) {
    let curStr = wordArray[j];
    if (curStr.split("").reverse().join("").toLowerCase() !== orderArray[orderArray.length - 1].toLowerCase()) {
      orderArray.push(curStr);
    } else {
      orderArray.pop();
    }
  }
  if (orderArray.length === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = matchWord;
