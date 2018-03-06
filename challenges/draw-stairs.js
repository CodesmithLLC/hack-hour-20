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

// function drawStairs(n) {
//     let steps = [];
// 	for (var i = 0; i < n +1; i++) {
// 		steps.push(" ");
// 	} // put items in array
// 	for (var j = n; j > 0; j--) {
// 		steps.splice(j,1,"*");
// 		//console.log(steps);
// 		console.log(steps.join(""));
// 	}

// }

//console.log(drawStairs(5));
module.exports = drawStairs;

function drawStairs(n) {
	if (typeof n !== 'number') return;
	let str = '';
	for (let i = 0; i < n; i++) {
		console.log(str)
	  str += ' '.repeat(n - (i + 1));
	  str += '*'.repeat(i + 1);
	  str += '\n';
	}
	return str;
  }

console.log(drawStairs(3));