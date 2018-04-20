/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  let count = 0;
  for(let i = 0; i < array.length; i+=1) {
    for(let j = 0; j < array.length; j+=1) {
      if(array[i] === array[j]) count += 1;
      if(count === 2) return array[i];
    }
    count = 0;
  }
}

// repeatNumbers([4,1,2,3,4]);
// // console.log(repeatNumbers([4,1,2,3,3]));
// // console.log(repeatNumbers([2,1,4,4,2]));


module.exports = repeatNumbers;
