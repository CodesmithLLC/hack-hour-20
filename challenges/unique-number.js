/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  let matchObj = {};
  for (let i = 0; i < array.length; i++) {
    if (!matchObj[array[i]]) {
      matchObj[array[i]] = true;
    } else {
      delete matchObj[array[i]];
    }
  }
  return Object.keys(matchObj)[0];
}

module.exports = uniqueNumber;
