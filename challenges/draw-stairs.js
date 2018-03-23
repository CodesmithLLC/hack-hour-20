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
  var step = new Array(n)
    step.fill(' ')
    for(var i = step.length-1; i <= 0; i--) {
      if(step[0] === '*') {
        return step
      } else {
      if(step[i] === ' ') {
        step.replace(step[i], '*')
      }
      }
    }
    console.log(step)
}


module.exports = drawStairs;
