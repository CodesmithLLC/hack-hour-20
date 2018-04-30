/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target, oneCount = 0) {
  if (arr.length === 0 || !Array.isArray(arr) || oneCount === 2) {
    return false;
  }
  let midInd = Math.floor(arr.length/2);
  let middle = arr[midInd];
  let newArr;

  if (middle === target) {
    return true;
  } else if (target < middle) {
    newArr = arr.slice(0, midInd);
    if (newArr.length <= 1) {
      oneCount++
    } else if (newArr[newArr.length-1] < target) {
      return false;
    }
  } else {
    newArr = arr.slice(midInd, arr.length);
    if (newArr.length <= 1) {
      oneCount++
    } else if (newArr[0] > target) {
      return false;
    }
  }
  return findInOrderedSet(newArr, target, oneCount);
}

module.exports = findInOrderedSet;
