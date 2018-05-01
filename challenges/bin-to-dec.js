//////////////////
///Needs Review///
//////////////////

/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
    return binary.split('').reverse().reduce((acc, cur, i) => {
        return acc + (Number(cur) * Math.pow( 2 , i));
    }, 0 );
}

// let decToBin = (n, binary = '') => {


//     return binary + decToBin(n - something, binary )

//     //largest power of 2 before you go over
//     let largestPow;
//     for(let i = 0; i < n ; i++){
//         if(Math.pow(2, i) > n){
//             largestPow = i - 1;
//             break;
//         }
//     // }
//     // let result = Array(largestPow + 1);
//     // for(let j = result.length-1, i = 0 ; i > 0 ; j--, i++){
//     //     result[i] = n / Math.pow(2, j)
//     // }





// }
// console.log(decToBin(13));
console.log(Math.log2(13));
module.exports = binToDec;
