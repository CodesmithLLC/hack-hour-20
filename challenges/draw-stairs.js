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
//   if (n >= 1 && n <= 100) {
//     for (let i = 1; i <= n; i++) {
//       let floor = '';
//       for (let j = 0; j < n - i; j++) {
//         floor += ' ';
//       }
//       for (let j = 0; j < i; j++) {
//         floor += '*';
//       }
//       console.log(floor);
//     }
//   } else {
//     return 'n is not in range';
//   }
// }


function drawStairs(n) {
    for (let i = 1; i <= n; i++) {
      const spaces = ' '.repeat(n - i);
      const splats = '*'.repeat(i);
      console.log(spaces + splats);
    }
}
  
// drawStairs(6);

module.exports = drawStairs;
