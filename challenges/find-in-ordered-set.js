/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
	console.log(arr);
	const mid = Math.floor(arr.length/2);
	const test = arr[mid];
	if (arr.length === 1 && arr[0] !== target) return false;
	if (test === target ) return true;
	else if (test > target) return findInOrderedSet(arr.slice(0,mid), target);
	else return findInOrderedSet(arr.slice(mid+1), target);
}

module.exports = findInOrderedSet;
