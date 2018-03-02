/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
// for(let i = 1; i <= n ; i++){
//     let result = '';
//     let diff = n - i;
//     let numAst = i;
//     while(diff != 0){
//         result+= ' ';
//         diff--;
//     }
//     while(numAst != 0){
//         result += '*';
//         numAst--;
//     }
//     console.log(result)
//     }
let newStr = '';
for(let i = 1; i <= n; i++){
    newStr += ' '.repeat(n-i);
    newStr += '*'.repeat(i);
    newStr += '\n';
}
return newStr;
}


module.exports = drawStairs;
console.log(drawStairs(6));