/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

 //[ [ 0, 1 ], [ 3, 5 ], [ 4, 8 ], [ 9, 10 ], [ 10, 12 ] ]


function mergeRanges(array) {
    let returnArray = [];
    array.sort((a,b)=>a[0] - b[0])
    let x = 0
    while(array[x + 1]){
        if(array[x][1] > array[x+1][0]){
            let y = x+1
            while(array[y] && array[y]0 >=)
        }
    }



}

console.log(mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]))


module.exports = mergeRanges;
