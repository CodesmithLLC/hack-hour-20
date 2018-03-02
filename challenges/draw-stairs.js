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

function drawStairs (n) {
  for (let lines = 1; lines <= n; lines++) {
    let starSpaces = '';
    for (let spaces = 1; spaces < -lines + n + 1; spaces++) {
      starSpaces += ' ';
    }
    for (let stars = 0; stars < lines; stars++) {
       starSpaces += '*';
    }
    console.log(starSpaces)
 }

}



drawStairs(4)
drawStairs(5)
drawStairs(8)
module.exports = drawStairs;
