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
    if(str.length <= 1){
        return true;
    }
    let strArr = str.split('');
    let stackArr = [];
    let newWord = false;
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i].match(/[a-zA-Z]/i)) {
            if(newWord) {
                if(strArr[i].toUpperCase() === stackArr[stackArr.length-1]) {
                    stackArr.pop();
                }else{
                    newWord = false; 
                }
            } else {
                stackArr.push(strArr[i].toUpperCase());
            }
        } else if(stackArr.length > 1) {
            newWord = true;
        }
    }
    return stackArr.length === 0;
}

module.exports = matchWord;