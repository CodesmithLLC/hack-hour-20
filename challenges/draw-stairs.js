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

const drawStairs = (n) => {
    for (let i = 0; i < n; i++) {
        const s = [];
        for (let j = n - i - 1; j > 0; j--) s.push(' ');
        for (let j = i + 1; j > 0; j--) s.push('*');
        console.log(s.join(''));
    }
};


module.exports = drawStairs;
