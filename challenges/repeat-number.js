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
  const newObj = {};
  for (let i = 0; i < array.length; i += 1) {
    if (newObj[array[i]]) return array[i];
    newObj[array[i]] = 1;
  }
  return undefined;
}

function repeatNumbers1(array) {
  var result = 0;
  
  for (var i = 0; i < array.length; i ++) {
    result = result ^ i ^ array[i];
    console.log(result)
  }
  
  return result;
}
module.exports = repeatNumbers;
