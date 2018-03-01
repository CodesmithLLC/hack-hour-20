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
    let startPoint = "*";
    for(let i = 0; i < n; i++){ 
        startPoint = " ".concat(startPoint); 
    }
    
    let newSP = startPoint.split("");
    console.log(newSP.join(""));
    for(let i = 0; i<n; i ++){ 
        newSP.shift();
        newSP.push("*") 
        console.log(newSP.join("")); 
    }
    console.log

}

drawStairs(16); 


module.exports = drawStairs;
