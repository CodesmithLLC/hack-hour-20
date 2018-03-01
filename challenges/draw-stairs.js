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
    //need to create variables for empty space, star, and stair
    let space, star, stair;
// loop through up until number - the stairs are going to be n
//wide at their widest and n tall at their tallest
    for (var i = 0; i < n; i++){
      //space is decreasing each loop
        space = n - 1 - i;
        //star is increasing each loop
        star = i + 1;
        //create string - empty for space, star for star 
        //use repeat method with values of space and star as arguments
        stair = ' '.repeat(space) + '*'.repeat(star);
        //print out your stair
        console.log(stair);    
    }  
}


module.exports = drawStairs;
