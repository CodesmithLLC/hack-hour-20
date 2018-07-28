/**
 * Write a function mergeRanges that takes an array of meeting time ranges and
 * returns an array of condensed ranges.
 *
 * Example:
 *
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

// function mergeRanges(array) {
//   array.sort((a, b) => a[0] - b[0]);
//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i][0] <= array[i + 1][0] && array[i][1] >= array[i + 1][0]) {
//       if (array[i][1] < array[i + 1][1]) {
//         array[i][1] = array[i + 1][1];
//       }
//       array.splice(i + 1, 1);
//       i--;
//     }
//   }
//   return array;
// }

function mergeRanges(array) {
  if (!array.length) return [];
  array.sort((a, b) => a[0] - b[0]);
  const s = [array[0]];
  let index = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i][0] >= s[index][0] && array[i][0] <= s[index][1]) {
      s[index][1] = Math.max(array[i][1], s[index][1]); // important!
    } else {
      s.push(array[i]);
      index++;
    }
  }
  return s;
}

// function mergeRanges(array) {
//   array.sort(function(a, b) {
//     return a[0] - b[0];
//   });
//   var result = [array[0]];
//   for (var i = 1; i < array.length; i++) {
//     var curr = array[i];
//     var last = result[result.length - 1];
//     if (curr[0] > last[1]) {
//       result.push(curr);
//     } else if (curr[1] > last[1]) {
//       last[1] = curr[1];
//     }
//   }
//   return result;
// }

// const times = [[1,4],[0,4]];
// const times = [[1,4],[2,3]];
// const times = [];
const times = [[0, 1], [1, 6], [2, 3] , [4, 5], [10, 12], [9, 10]];
// const times = [[0, 1], [3, 6], [4, 6], [10, 12], [9, 10]];
// const times = [[0, 1], [3, 5], [3, 8], [2, 12], [9, 10]];
console.log(mergeRanges(times));


module.exports = mergeRanges;
