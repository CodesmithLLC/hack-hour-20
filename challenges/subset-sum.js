/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  var array2 = array.slice(0, array.length);
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    
    var sum = array[i];
    for (var j = 0; j < array2.length; j++) {
      for (var k = 0; k <= array2.slice(j, count + 1).length; k++) {
        console.log(array2.slice(j, count + 1));
        if (i !== k) {
        sum += array2[k];
        }
      
      }
      if (sum === target) {
      return true;
      }
    }
    count++;
    
  }
  return false;
}

module.exports = subsetSum;
