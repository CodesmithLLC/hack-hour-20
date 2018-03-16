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
    let newArr = array.sort(function(a,b){
        return a - b    });
    let result = 0;
    console.log(newArr)

    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++){
            console.log('the result',result);
            if (result === 0) {
                result = newArr[i] + newArr[j];
            }
            if ( (result + newArr[i] + newArr[j]) < target){
                console.log('the coombinations', newArr[i], newArr[j]);

                result = result + newArr[i] + newArr[j];
                console.log('the result changed', result + newArr[i] + newArr[j] );
                continue;
            } else if ((result + newArr[i] + newArr[j] ) === target) {
                return true;
            }

        }
    }

}
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32));

module.exports = subsetSum;
