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
    const combine  = [];
    for ( let i = 0 ; i < 4; i++){
        let temp = "";
        for ( let j = 0 ; j < array.length; j++){
            temp += array[j];
            if(temp !== ""){
                combine.push(temp);
            }
        }
        
    }
    return combine;
}
console.log(subsetSum([1,2,3,4],4));
module.exports = subsetSum;

// a b c d ab ac ad bc bd cd abc abd acd bcd abcd 
// [a,b,c,d]
