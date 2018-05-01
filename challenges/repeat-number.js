//////////////////
///Needs Review///
//////////////////

/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
    let result = {};
    for (let i = 0; i < array.length; i++){
        if(result[array[i]]){
            return array[i];
        }
        result[array[i]] = 'foo';
    }
}

console.log(repeatNumbers([1,2,3,7,3,4,6,9]));
let n = 10;
console.log(n.toString(2));

module.exports = repeatNumbers;
