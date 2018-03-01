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
  if (n >= 1 && n <= 100) {
    for (let i = 1; i <= n; i++) {
      var stars = i;
      var spaces = n - stars;
      var starString = '';
      for (let j = 1; j <= stars; j++) {
        starString += '*'
      }
      spaceString = '';
      for (let m = 1; m <= spaces; m++) {
        spaceString += ' ';
      }
      var stair = spaceString.concat(starString);
      console.log(stair);
    }
  } else {
    console.log('Please input a number between 1 and 100');
  }
}


module.exports = drawStairs;
