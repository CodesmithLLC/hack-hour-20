<<<<<<< HEAD
// Some languages have "if" statements that are closed by "fi" instead of curly brackets. 
//Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". 
//Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. 
//Words must be separated by space or 
=======
// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
>>>>>>> 600039e0133611714dea10ae951350dafa4e28d4
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
<<<<<<< HEAD
  lowStr = str.toLowerCase()
  newStr = lowStr.replace(/[^\w\s]/gi, '')
  newArr = newStr.split(' ')
    
  revStr = newStr.split('').reverse().join('')
  revArr = revStr.split(' ')
   
  return newArr[0]===revArr[0]
=======

>>>>>>> 600039e0133611714dea10ae951350dafa4e28d4
}

module.exports = matchWord;
