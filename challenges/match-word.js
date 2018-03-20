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
    str = str.replace(/[.,\/#!$%\^&\[*;:{}=\-_`~()]/g," ").trim()
    str = str.replace(/]/g,"")
    let array = str.split(" ")
    let holdingArray = [];
    array = array.filter((curr)=> curr !== "")
    array = array.map((curr)=>curr.toUpperCase())
    let array1 = array.slice(0, array.length/2)
    let array2 = array.slice(array.length/2, array.length)
    array2 = array2.map((curr)=> curr.split("").reverse().join(""))
    if(array1.length !== array2.length){
      return false;
    }
    for(let i = 0; i < array1.length; i++){
      if(array1[i] !== array2[i]){
        return false;
      }
    }
    return true;
    
}
module.exports = matchWord;
