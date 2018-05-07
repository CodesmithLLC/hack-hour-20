/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 */

/////first try/////
//this doesnt accomplish the o(1) space complexity.//

// function uniqueNumber(array) {
//     let obj = {}
//     array.forEach(e => {
//         obj.hasOwnProperty(e)? obj[e]++ : obj[e] = 1;
//     });
//     return Object.entries(obj).filter(e => e[1] === 1)[0][0];
// }

/////Refactor/////
function uniqueNumber(array, carryover = {}){
    

}
console.log(uniqueNumber([1,2,1,3,3]));
module.exports = uniqueNumber;
