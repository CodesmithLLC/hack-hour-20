/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
  if (!arr2) {
    return arr1;
  }
  if (!arr1) {
    return arr2;
  }
  let add = arr1[0];
  let next = arr2[0];
  const output = [];
  let length;
  if (arr1.length > arr2.length) {
    length = arr1.length
  } else {
    length = arr2.length
  }
  for (let i =0; i < length ; i++) {
    if (add > next) {
      tempNext = next;
      next = add;
      add = tempNext;
    } else {
      add = arr1[i];
      next = arr2[i];
    }
    if (add) {
      output.push(add);
    }
    if (next) {
    output.push(next);
    }
  }
  
  return output;
}

module.exports = mergeArrays;
