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
    let result = 0, exp = 1;
    for (let i = binary.length - 1; i >= 0; i--) {
        result = (parseInt(binary.charAt(i)) * exp) + result;
        exp = exp * 2;
    }
    console.log(result);
    return result;

}
binToDec('0')   //-> 0
binToDec('11')  //-> 3
binToDec('100') //-> 4
binToDec('101') //-> 5
binToDec('0101') //-> 5



// function decToBin(decimal) {
//     let result = 0, startExp = 1;
//     for (let i = 0; i < decimal.length; i++) {
//         let curr = parseInt(decimal.charAt(i));
//         if (curr / exp > 2) {

//         }
//         result = (curr * exp) + result;
//         exp = exp * 10;
//     }
//     console.log(result);

// }
// decToBin('0')  // -> 0
// decToBin('3') // -> 3
// decToBin('4')// -> 4
// decToBin('5') //-> 5
// decToBin('5') //-> 5
 

module.exports = binToDec;
