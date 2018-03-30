/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
	if(str.length < 0){
    return false;
  } else if( str.length === 1){
    return true;
  }
  let strArr = str.split('');
  let key = {};
  let length = strArr.length;
  for(let i = 0; i < strArr.length; i++){
    key[strArr[i]] = ++key[strArr[i]] || 1;
  }
  let newOdd = 0;
for(let prop in key){
  if(key[prop] % 2 === 1) newOdd++;
  if(newOdd > 1){
    return false;
  }
}
return true;
}

module.exports = permPalin;