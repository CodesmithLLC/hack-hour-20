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
  var first = ''
  var savedWord = str.toLowerCase().split('')
    for(var i = 0; i < savedWord.length; i++) {
      if(useStr[i].match(/[a-z]/i) first += useStr[i]
  //for(var i = 0; i < useStr.length; i++) {
  //   if(useStr[i].match(/[a-z]/i) && (useStr[i-1].match(/[a-z]/i))) {
  //     savedWord.push(useStr[i])
  //   }
  //   if(savedWord.length > 0) {
  //     revWord.push(useStr[i])
  //   }
  //   console.log(savedWord, revWord)
  // //if(savedWord.length % 2 === 1) return false
    console.log(savedWord)
  //}
  }
}

module.exports = matchWord;
