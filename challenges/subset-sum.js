/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
    let myArr = [];
    return createSubset(myArr, array);
}

function createSubset(curr, set) {
    console.log('curr', curr);
    let result = [];
    curr = curr.concat(curr);
    console.log(curr);
    for (let i = 0; i < set.length; i++) {
        let subset = [];
        subset.push(set[i]);
        curr.push(subset);
    }

    result.push(curr);
    console.log('after everything, curr = ', curr);
    let i = 0;
    for (let i = 0; i < set.length; i++) {
        console.log(i);
        for (var j = i+1; j < set.length; j++) {
            console.log('curr ', curr[i]);
            let result = curr[i].concat(curr[i]);
            console.log(result);
            curr.push(result);
        }
    }
    return curr;
}

console.log(subsetSum([1, 2, 3, 4], 5));
// console.log(subsetSum([3, 34, 4, 12, 5, 12], 32));
// console.log(subsetSum([8, 2, 4, 12], 13));
// console.log(subsetSum([8, -2, 1, -3], 6));


module.exports = subsetSum;
