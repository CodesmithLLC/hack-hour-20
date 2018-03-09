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

function reverseInPlace(array) {
  array.push([])
for(var i = 0; i < array.length; i++) {
 var subarray = array[array.length-1]
 subarray.push(array[i])
 console.log(subarray, 'subarray')
 for(var a = subarray.length-2; a >= 0; a--) {
   array[i] = subarray[a]
 }
 }
}

module.exports = reverseInPlace;
