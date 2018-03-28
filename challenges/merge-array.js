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


var my_array = [3, 4, 6, 10, 11, 15, 21];
var another_array = [1, 5, 8, 12, 14, 19];

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(mergeArrays(my_array, another_array))


function mergeArrays2(arr1, arr2) {
    let newArr = [];
    let pArr1 = arr1.length - 1;
    let pArr2 = arr2.length - 1;
    while (pArr1 !== -1 || pArr2 !== -1) {
        if (arr1[pArr1] >= arr2[pArr2]) {
            newArr.unshift(arr1[pArr1])
            pArr1 -= 1;
        }
        else if (arr1[pArr1] < arr2[pArr2]) {
            newArr.unshift(arr2[pArr2])
            pArr2 -= 1;
        } 
        else if (pArr1 !== 0) {
            newArr.unshift(arr1[pArr1])
            pArr1 -= 1;
        }
        else if (pArr2 !== 0) {
            newArr.unshift(arr2[pArr2])
            pArr2 -= 1;
        }
        console.log(pArr1, pArr2)
    }
    return newArr;
}

console.log('mergeArray2', mergeArrays2(my_array, another_array))


module.exports = mergeArrays;
