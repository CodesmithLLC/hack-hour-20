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
    let newSortedArray = [];
if (Array.isArray(arr1), Array.isArray(arr2)){
    let maxLength = Math.max(arr1.length,arr2.length);
    for (let i = 0; i < maxLength; i++){
        if (arr1[i] && arr2[i]){
            if (arr1[i] > arr2[i]){
                newSortedArray.push(arr2[i], arr1[i]);
            } else {
                newSortedArray.push(arr1[i], arr2[i]);
            }
        }else if (arr1[i]){
            newSortedArray.push(arr1[i]);
        }else {
            newSortedArray.push(arr2[i]);
        }
    }
    return newSortedArray;
}
}
console.log(mergeArrays([3,4,6,10,11,15,21],[1,5,8,12,14,19,20,22]))

module.exports = mergeArrays;
