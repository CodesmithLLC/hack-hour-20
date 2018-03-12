'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

// figure out how to only iterate through half
function reverseInPlace (arr) {
  arr.forEach((el, i, array) => {
    let temp = el, backIndex = arr.length - 1 - i;
    arr[i] = arr[backIndex];
    arr[backIndex] = el;
  })
  return arr;
}

function reverseInPlace2 (array) {
  for (let front = 0; front < array.length / 2; front++) {
    let temp = array[front], backIndex = array.length - 1 - front;
    array[front] = array[backIndex]
    array[backIndex] = temp;
  }
  return array;
}

function reverseInPlace3 (array) {
  return array.reverse();
}




const arr = ['a', 'b', 'c', 'd', 'e'];
console.log(reverseInPlace(arr))

module.exports = reverseInPlace;
