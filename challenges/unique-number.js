/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  return array.find(function(value){
    return array.indexOf(value) === array.lastIndexOf(value); 
  }) || -1;
}

console.log(uniqueNumber([1,2,1,3,3]));
console.log(uniqueNumber([10,10,5,20,5,20,5,3]));


module.exports = uniqueNumber;
