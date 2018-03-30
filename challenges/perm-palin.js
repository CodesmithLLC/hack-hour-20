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
// make permutations
//compare to reverse
function permPalin(str) {
  let objCharCount = {};
  let arrStr = str.split('');
  for ( let i = 0; i < arrStr.length; i++ ){ 
        if (!objCharCount[arrStr[i]]) {
            objCharCount[arrStr[i]] = 1;
        } else {
            objCharCount[arrStr[i]]++
        }
    //     let removed = arrStr.pop();
    //   arrStr.unshift(removed)
    //   console.log(arrStr);
    //   console.log('reverse',arrStr.reverse())
    //   if (JSON.stringify(arrStr) === JSON.stringify(arrStr.reverse())) return true;
  }
let charCount = Object.values(objCharCount);
let odd = 0;
  charCount.filter((num)=> {
      if (num %2 !== 0) {
          odd++;
      }
  });
    if (odd > 1){
        return false;
    } else {
        return true;
    }
}

module.exports = permPalin;