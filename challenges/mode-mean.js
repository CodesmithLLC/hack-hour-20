/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


 function modemean(array) {
   var sortedArr = array.sort(function(a, b){return a-b});
   var sumOfArr = sortedArr.reduce((total, curr, idx, arr) => total+=curr,0);
   var mean = Math.floor(sumOfArr/sortedArr.length);

   var arrayTally = sortedArr.reduce((acc, curr) => {
     !acc[curr] ? acc[curr] = 1 : acc[curr]+=1;
     return acc;
   },{})

   var highestOccur = 0;
   for (const prop in arrayTally) {
     if (arrayTally[prop] > highestOccur) {
       highestOccur = +prop;
     }
   }
   console.log(mean, highestOccur)
   return (mean === highestOccur) ? true : false;
 }

module.exports = modemean;
