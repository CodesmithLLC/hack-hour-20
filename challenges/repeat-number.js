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

function repeatNumbers2(array) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    if (!obj.hasOwnProperty(array[i].toString())) {
      obj[array[i].toString()] = 1;
    } else {
      return i;
    }
  }
}

function repeatNumbers(array) {
  return array.sort((a,b) => {
    if (a == b) {
      return a;
    }
  });
}

const myArr = [2, 3, 3, 5, 6, 8, 7, 9, 10, 2];
console.log(repeatNumbers(myArr));

module.exports = repeatNumbers;
