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
  //if(binary === '0') {return 0}
  var num = 1
  var arr = binary.split('')
  //for(var i = binary.length-1; i < binary.length; i--) {
  arr.forEach(function checkIfOne(curr) {
    if(arr[0] === 1) num+=1
    if(arr[1] === 1) num+=2
    if(arr[2] === 1) num+=4
    if(arr[3] === 1) num+=8
    // if((i === 1) && (binary[i] === 1)) {
    //   num += 1
    // }
    // if((i === 2) && (binary[i] === 1)) {
    //   num += 2
    // }
    // if((i === 3) && (binary[i] === 1)) {
    //   num += 4
    // }
    // if((i === 4) && (binary[i] === 1)) {
    //   num += 8
    // }
  })
    //etc. to i===64
return num
}
binToDec('1001')

module.exports = binToDec;

2.8 2.7 2.6 2.5 2.4 2.3 2.2 2.1 2.0
                              1   1
