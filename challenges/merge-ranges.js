//////////////////
///Needs Review///
//////////////////

/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of
 *  condensed ranges.
 *
 * Example:
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
    let result = []
    for(let i = 0; i < array.length; i++){
        let first = array[i];

        for(let j = 0; j < array.length; j++){

            let second = array[j];
            console.log(first, second);
            if ( first[1] >= second[0] && i !== j && first[0]<=second[0]){
                console.log(`if hit with ${first[1]} is >= ${second[0]}`);
                let merged = [first[0], second[1]];
                result.push(merged);
            }
        }

    }
    return result;
}

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]

console.log(mergeRanges(times));//-> [[0, 1], [3, 8], [9, 12]]
module.exports = mergeRanges;
