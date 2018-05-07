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

function binToDec(binary, index = binary.length - 1, base = 1, sum = 0) {
  if (index === -1) return sum;
  
      if (binary[index] === '0') {
        var newAdd = 0;
      } else if (binary[index] === '1') {
        var newAdd = base;
      }
    
    return binToDec(binary, index - 1, base * 2, sum + newAdd);
}

module.exports = binToDec;
