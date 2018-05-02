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
  let newArr = [];
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i][1] >= array[j][0] && array[i][0] < array[j][1]) {
        newArr.push([array[i][0], array[j][1]]);
        obj[array[i]] = true;
        obj[array[j]] = true;
      }
      if (array[i][0] >= array[j][1] && array[i][1] > array[j][0]) {
        newArr.push([array[j][0], array[i][1]]);
        obj[array[i]] = true;
        obj[array[j]] = true;
      }
    }
  }
  for (let k = 0; k < array.length; k++) {
    if (!obj[array[k]]) {
      newArr.push(array[k]);
    }
  }
  return newArr;
}

module.exports = mergeRanges;
