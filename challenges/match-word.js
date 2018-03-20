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

//iterate through the string from both ends
//only consider the characters that are letters
//if characters are letters compare front word to back (reversed) word
//if words don't match then save front word and compare with next front word

function matchWord(str) {
    let arrOfLetters = [];

    for (let i = 0; i < str.length; i++){
        if ((/[a-zA-Z]/).test(str[i])){
            arrOfLetters.push(str[i]);
        }
    }

    for (let i = 0, j = str.length-1; i < str.length, j <= 0; i++, j--){
        if (arrOfLetters[i] !== arrOfLetters[j]) {
            return false;
        }
    }
    return true;
}



module.exports = matchWord;
