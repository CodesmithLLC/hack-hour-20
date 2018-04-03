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
    mean = Math.floor((array.reduce((a,b)=>{ return a+b; }))/array.length);
    let mode = {};
    array.forEach((num) => { mode[num]!==undefined ? mode[num]++ : mode[num]=0;});
    let max = 0;
    let maxkey;
    for(key in mode){
        if(mode[key] > max){
            max = mode[key];
            maxkey = key;
        }
    }
    return maxkey===mean;
}
module.exports = modemean;
