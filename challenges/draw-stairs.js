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
    n = n-1
      for(let i = 0; i <= n; i++){
          let line = "";
          for(let j = n+1; j >= 0; j--){
            if(j>i){
              line += " "
            } else {
              line += "*"
            }
          }
          console.log(line)
      }
  }
  



module.exports = drawStairs;
