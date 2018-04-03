/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

function modemean(array) {
    let storage = {};
    let sum = 0;
    let myMode = 0;
    let currModeCtr = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i]; 
        if (storage[array[i]]) {
            storage[array[i]]++;
        }
        else {
            storage[array[i]] = 1;
        }
        if (storage[array[i]] > currModeCtr) {
            myMode = array[i];
            currModeCtr++;
        }
        if (array[i] > myMode) {
            myMode = array[i];
        }

        
    }
    console.log('myMode',myMode, 'currModeCtr',currModeCtr);

    // let mode = Object.entries(storage).sort(function (a, b) {
    //     console.log(a)
    //     return a - b;
    // });
    // console.log(storage);
    // console.log(mode);
    return sum / array.length === myMode;

}
console.log(modemean([4, 4, 4, 5, 5, 5]));

module.exports = modemean;
