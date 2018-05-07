/////////////////////
///Review Complete///
/////////////////////

/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */



/////FIRST ATTEMPT /////

// function twoSum(arr, n) {
//     if(arr.length < 2) return false;
//     for(let i = 0; i < arr.length; i++){
//         let num1 = arr[i];
//         for(let j = 0; j < arr.length; j++){
//             let num2 = arr[j];
//             if(i === j) continue;
//             if(num1 + num2 === n) return true;
//         }
//     }
//     return false;
// }

/////REFACTOR #1 (recursive)/////

// function twoSum(arr, n, currIndex = 0) {
//     //base case
//     if (arr[currIndex] === undefined) return false;
//     for (let j = 0; j < arr.length; j++) {
//         if(currIndex === j) continue;
//         if (arr[currIndex] + arr[j] === n) return true;
//     }
//     return twoSum(arr, n, ++currIndex);
// }

/////REFACTOR #2/////

// function twoSum(arr, n) {
//     let cashe = {};
//     for (let i = 0; i < arr.length; i++){
//         cashe[arr[i]] = n - arr[i];
//     }
//     console.log(cashe);
//     for(let j = 0; j < arr.length; j++){
//         if(cashe.hasOwnProperty(cashe[arr[j]])){
//             console.log(arr[j], 'im here');
//             return true;
//         }
//     }
//     return false;
// }

/////REFACTOR #3 ///// from CS

// function twoSum(arr, n) {
//     if(arr.length < 2) return false;
//     arr = arr.sort((a, b) => a - b);
//     for(let i = 0, j = arr.length-1; i !== j;){
//         if(arr[i] + arr[j] === n ) return true;
//         arr[i] + arr[j] < n
//         ? i++
//         : j--;
//     }
//     return false;
// }

/////FROM CS/////
// Hash
function twoSum(arr, n) {
    var nums = {};
    for (var i = 0; i < arr.length; i++) {
      nums[arr[i]] = i;
    }
    console.log(nums)
    for (var j = 0; j < arr.length; j++) {
      if (j !== nums[n - arr[j]]) return true;
    }
    return false;
  }
  // Hash improved
//   function twoSum(arr, n) {
//     var nums = {};
//     for (var i = 0; i < arr.length; i++) {
//       if (nums[n - arr[i]]) return true;

//       nums[arr[i]] = 1;
//     }
//     return false;
//   }
console.log('These should return true:');
console.log(twoSum([2, 3, 17, 9, 14], 20));
console.log(twoSum([6, 13, 12, 1, 4], 5));
console.log('These should return false');
console.log(twoSum([2, 6, 2, 7, 4], 1));
console.log(twoSum([9, 3, 16, 20, 2], 14));
console.log(twoSum([1], 1));

module.exports = twoSum;