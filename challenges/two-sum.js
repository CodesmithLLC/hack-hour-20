/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    if(Array.isArray(arr) === false || arr.length <2){
        return false;
    }

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] && i !== j){
                return true;
            }
        }
    }

    return false;
}

module.exports = twoSum;
