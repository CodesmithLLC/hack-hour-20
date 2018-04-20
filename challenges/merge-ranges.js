/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  array.sort((a,b) => a[0] - b[0]);
  let newArr = [];
  array.forEach(function(newSet) {
    if(!newSet.length || newSet[0] > newArr[newArr.length -
       1][1] {
        newArr.push(newSet);
    }
    else newArr[newArr.length-1][1] = newSet[1];
  })
  return newArr;
}

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]

console.log(mergeRanges(times));

module.exports = mergeRanges;
