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
    if (typeof binary !== 'string') return 'invalid input';
    if (binary === '0') return 0;
  //   let arr = binary.slice(0);
    let decNum = 0;
    let power = 0;
    for (let i = binary.length-1; i > 0; i--) {
      console.log("binary at i", binary[i])
      if (binary[i] === '1') {
        var add = Math.pow(2,power)
        console.log("DN", decNum);
        decNum += add
        console.log("DN", decNum);
      }
      power++;   
      console.log("power", power)
    }
    return decNum
  }

module.exports = binToDec;
