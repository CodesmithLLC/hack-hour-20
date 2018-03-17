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
  //split string into array of string numbers
  // declare a sum variable
  // filter over array for elements that contain a 1 string
    //convert string to number
      // take index of the string and multiply 2 to power of index
        //add to sum 
  //return sum


function binToDec(binary) {
    let arrayOfBinary = binary.split('').reverse();
    let sum = 0;
    console.log(arrayOfBinary);
    arrayOfBinary.forEach((string, index)=>{
        if (Number(string) === 1){
            sum += Math.pow(2,index);
        }
    });
    return sum;
}
console.log(binToDec('100'));

module.exports = binToDec;
