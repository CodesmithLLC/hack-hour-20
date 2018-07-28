/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

const repeatNumbers1 = array => {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    if (!obj.hasOwnProperty(array[i])) {
      obj[array[i].toString()] = 1;
    } else {
      return array[i];
    }
  }
};

const repeatNumbers2 = array => {
  const n = array.length - 1;
  const targetSum = (n * (n + 1)) / 2;
  const actualSum = array.reduce((sum, currentValue) => sum + currentValue);
  return actualSum - targetSum;
};

const repeatNumbers3 = (array) => {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result = result ^ i ^ array[i];
  }
  return result;
};

const myArr = [1, 2, 3, 8, 4, 8, 5, 6, 7, 9];
// const myArr = [3, 2, 1];

// console.log(repeatNumbers1(myArr));
// console.log(repeatNumbers2(myArr));
console.log(repeatNumbers3(myArr));

module.exports = repeatNumbers1;
