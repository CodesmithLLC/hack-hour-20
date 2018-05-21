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
  var sorted = array.sort()
  function recurseArray() {
  if(array.length < 2) return false
   var total = array.shift()
   for(var i = 0; i < array.length; i++) {
     if(i < target) {
       total += i
//increment total by i. if === target retrun true.
//if total > target reset total to array.shift() and run through array again
       if(total === target) return true
       if(total > target)
       recurseArray(total, target)
     }
    }
  }
}


module.exports = subsetSum;
