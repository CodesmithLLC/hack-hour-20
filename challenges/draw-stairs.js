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
function space(n) {
    if (n === 0) return '';
    let blank = ' ';
    return blank + space(n - 1)
}

function drawStairs(n) {
    if (n >0 && n <=100) {
    let str = '';
    let blank = space(n);
  for (let i = 1; i <= n; i ++) {
      str += '*';
      blank = blank.slice(1)
      console.log( blank+ str);
    }
  }
}



module.exports = drawStairs;
