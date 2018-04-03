// Some languages have "if" statements that are closed by "fi" instead of curly 
// brackets. 
// Or they close a "case" with "esac", i.e. the same keyword backwards. for 
// this problem we'll check that all words in a string are "closed". Write 
// a function that takes a string and returns true if every word is closed by 
// its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
    let newStr = str.toLowerCase().replace(/[^a-z]/g, ' ').trim();
    console.log(newStr);
    let i = 0;
    let j = newStr.length - 1;
    let checkMatch = true;
    while (i < j) {
        if (newStr.charAt(i).toLowerCase() === newStr.charAt(i).toUpperCase()) {
            i++;
            checkMatch = false;
        }
        if (newStr.charAt(j).toLowerCase() === newStr.charAt(j).toUpperCase()) {
            j--;
            checkMatch = false;
        }
        if (checkMatch) {
            if (newStr.charAt(i) !== newStr.charAt(j) || ((j == i+1) && (newStr.charAt(i) == newStr.charAt(j)))) {
                return false;
            }
        }
        i++ , j--;
    }
    return true;
}

// console.log('THESE SHOULD BE TRUE');
console.log(matchWord('__END_DNE-----'));  // -> true
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')); // -> true
console.log(matchWord(''));  //-> true
console.log(matchWord('IF()()fi[]'));  // -> true        (should be case-insensitive)
// console.log('\n\nTHESE SHOULD BE FALSE');
console.log(matchWord('__ENDDNE__')); // -> false       (not separated by a space)
console.log(matchWord('for__if__rof__fi')); // -> false     not properly closed. like ( [) ] 


module.exports = matchWord;
