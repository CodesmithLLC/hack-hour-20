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
    str = str.toUpperCase(); 
    let newArray = str.split(/[^A-Z0-9]/g).filter((e)=> e !== "");
    console.log({newArray});
    let result = []; 
    newArray.forEach((e, i) => {
        // console.log(`iteration IN with newArray = ${newArray}`);
        console.log(`iteration IN with result = ${result}`);
        
        
        
        if(result[i-1]){
            console.log(`comparing: ${e} AND ${result[i-1].split('').reverse().join('')}`)
        }
       
        if(result[i-1] && e === result[i-1].split('').reverse().join('')){
            console.log("popping"); 
           result.pop(); 
       }else{
           console.log("pushing");
           result.push(e); 
       }
        // console.log(`iteration OUT with newArray = ${newArray}`);
        console.log(`iteration OUT with result = ${result}`);
        console.log("=====================")
    });
    console.log({result}); 
    return  result.length === 0; 

}
 
// console.log(matchWord('phillip_pillihp'));
// console.log('phillip'.split('').reverse())



//test
console.log('Should be true'); 
// console.log(matchWord('__END_DNE-----'));  //-> true
// console.log(matchWord('IF()()fi[]'));  //-> true        (should be case-insensitive)
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));  //-> true
// console.log(matchWord(''));  //-> true


// console.log('Should be flase'); 
// console.log(matchWord('__ENDDNE__'));  //-> false       (not separated by a space)
// console.log(matchWord('for__if__rof__fi'));  //-> false     not properly closed. like ( [) ] 



module.exports = matchWord;


