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
    let steps = [];
	for (var i = 0; i < n +1; i++) {
		steps.push(" ");
	} // put items in array
	for (var j = n; j > 0; j--) {
		steps.splice(j,1,"*");
		console.log(steps);
		//console.log(steps.toString().replace(","));
	}
	
}

console.log(drawStairs(4));
module.exports = drawStairs;
