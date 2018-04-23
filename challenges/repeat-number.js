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
    let duplicateNumber = [];
    array.forEach((number, index)=> {
        if (array.indexOf(number, index +1) > -1){
            if (duplicateNumber.indexOf(number) === -1){
                duplicateNumber.push(number);
            }
        }
    })
    return duplicateNumber[0];
}

console.log(repeatNumbers([1,2,3,4,5,6,7,8,9,4,10]));

module.exports = repeatNumbers;
