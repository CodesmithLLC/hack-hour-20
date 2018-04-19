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
  //sort array with bult-in method
  var newArr = array.sort(function(a, b) {
    //if(a === b) return true
    return a-b
  })
  for(var i = 0; i < newArr.length; i++) {
    if(newArr[i] === newArr[i-1]) return newArr[i]
  }
}

module.exports = repeatNumbers;
