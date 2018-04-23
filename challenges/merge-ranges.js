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
  const result = [];
  array.sort((a,b) => { return a[0] - b[0]});
  for (let i = 0 ; i < array.length; i++) {
    if(array[i+1]) {
      if(array[i][1] <= array[i+1][1] && array[i][1] >= array[i+1][0]) {
        result.push([array[i][0], array[i+1][1]]);
        i++;
      } else if(array[i][1] > array[i+1][1]) {
        result.push(array[i]);
        i++;
      } else {
        result.push(array[i]);
      }
    } else {
      result.push(array[i]);
    }
  }
  if(JSON.stringify(result) == JSON.stringify(array)) return array;
  return mergeRanges(result);
}


module.exports = mergeRanges;
