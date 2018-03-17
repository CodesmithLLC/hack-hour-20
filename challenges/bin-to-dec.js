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

const binToDec = (bin) => {
  if (Number.isNaN(Number(bin))) return undefined;
  bin = String(bin);
  let dec = 0;
  const n = bin.length;
  for (let i = 0; i < n; i++) dec += (2 ** i) * bin[n - i - 1];
  return dec;
};

const decToBin = (dec) => {
  if (Number.isNaN(Number(dec))) return undefined;
  dec = String(dec);
  let bin = '';
  let n = Number(dec);
  if (n === 0) return '0';
  while (n > 0) {
    if (n / 2 === (n / 2)) bin += '1';
    else bin += 0;
    n = (n / 2);
  }
  return bin;
};

module.exports = { binToDec, decToBin };
