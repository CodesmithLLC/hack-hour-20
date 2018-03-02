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

//first try

// function drawStairs(n) {
//     //create the starting point with enough spaces before the *
//     let startPoint = "*";
//     for(let i = 1; i < n; i++){ 
//         startPoint = " ".concat(startPoint); 
//     }
//     // log the first point
//     console.log(startPoint);
//     //create a starting point array so its muteable
//     let newSP = startPoint.split("");
//     //traverse through array and add * the console.log
//     for(let i = 1; i<n; i ++){ 
//         newSP.shift();
//         newSP.push("*") 
//         console.log(newSP.join("")); 
//     }
// }

//refactor #1
function drawStairs(n){
    let result = "";
    let space = " " 
    let star = "*"; 
    let newLine = "\n";
    for(let i = 1; i <= n; i++){
        result +=space.repeat(n-i);
        result += star.repeat(i);
        result += newLine;
    }//end of forLoop
    return result; 
}


//need to create a variable of strigns and new lines and return once at the end. 
console.log(drawStairs(5)); 


module.exports = drawStairs;
