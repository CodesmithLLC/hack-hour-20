/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

// function findInOrderedSet(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) return true;
//   }
//   return false;
// }

function findInOrderedSet(arr, target) {
  // Base case
  if (arr[Math.floor(arr.length / 2)] === target) return true;
  if (arr.length === 1 && target !== arr[0]) return false;
  // Recursive case
  if (target < arr[Math.floor(arr.length / 2)]) {
    console.log(arr.slice(0, arr.length / 2));
    return findInOrderedSet(arr.slice(0, arr.length / 2), target);
  }
  console.log(arr.slice(arr.length / 2));
  return findInOrderedSet(arr.slice(arr.length / 2), target);
}

const nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 45));

module.exports = findInOrderedSet;
