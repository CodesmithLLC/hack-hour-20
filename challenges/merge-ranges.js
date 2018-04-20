/**
 * Write a function mergeRanges that takes an array of meeting time ranges and
 returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  for(var i = 1; i < array.length-1; i++) {
    if((array[i][0] < array[i-1][1]) && (array[i][1] < array[i+1][0])) {
      concatted = array[i-1].concat(array[i])
      let newSub = concatted.splice(1,2)
      console.log(concatted, 'arraysplice', array.splice(i-1, 2, concatted), 'splicedArr', array)
      //console.log(array[i])
    }
    //mergeRanges(array)
  }
  return array
}

module.exports = mergeRanges;
