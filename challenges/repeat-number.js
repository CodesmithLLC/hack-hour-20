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
    let obj = array.reduce((acc,curr)=> {
        if(curr in acc){
            acc[curr]++
        } else {
            acc[curr] = 1;
        }
        return acc
    },{})

    for(key in obj){
        if(obj[key] === 2){
            return key    
        }   
    }
    return "fail"
}


module.exports = repeatNumbers;
