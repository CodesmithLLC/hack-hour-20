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
  if (!arr2 || arr2.length === 0) {
    return arr1;
  }
  if (arr1.length === 0) {
    return arr2;
  }
  
  let add1 = arr1[0];
  let add2 = arr2[0];
  const output = [];
  let length;
  if (arr1.length > arr2.length) {
    length = arr1.length
  } else {
    length = arr2.length
  }
  
  let ind1 = 0;
  let ind2 = 0;
  
  for (let i = 0; i < (arr1.length + arr2.length) ; i++) {

    if (add1 > add2) {
      if (add2) {
      output.push(add2);
      }
      ind2++;
      if (arr2[ind2]) {
      add2 = arr2[ind2];
      } else {
        add2 = 1000000000000;
      }
    } else {
      if (add1) {
      output.push(add1);
      }
      ind1++;
      if (arr1[ind1]) {
      add1 = arr1[ind1];
      } else {
        add1 = 1000000000000;
      }
    }

  }
  
  return output;
}

module.exports = mergeArrays;
