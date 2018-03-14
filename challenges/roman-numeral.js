/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
  const stringNum = JSON.stringify(n);
  let output = '';
  let count = 0;
  for (let i = stringNum.length - 1; i >=0; i--) {
    
    
    if (stringNum[i] <= '3') {

        var newOut = '';
        for (let j = 0; j < JSON.parse(stringNum[i]); j++) {
          if (count === 0) {
            newOut = newOut + 'I';
          } else if (count === 1) {
            newOut = newOut + 'X'
          }
          
        }
      
    } 
    
    else if (stringNum[i] <= '8') {

      if (count === 0) {
        var newOut = 'V';
      } else if (count === 1) {
        var newOut = 'L';
      }
        if ((JSON.parse(stringNum[i]) - 5) < 0) {
          for (let j = 0; j < Math.abs(JSON.parse(stringNum[i]) - 5); j++) {
            if (count === 0) {
            newOut = 'I' + newOut;
            } else if (count === 1) {
              newOut = 'X' + newOut;
            }
          }
        } else {
          for (let j = 0; j < JSON.parse(stringNum[i]) - 5; j++) {
            newOut = newOut + 'I';
          }
        }
      
    } 
    
    else {
      if (count === 0) {
        var newOut = 'X';
      } else if (count === 1) {
        var newOut = 'C'
      }
        if ((JSON.parse(stringNum[i]) - 10) < 0) {
          for (let j = 0; j < Math.abs(JSON.parse(stringNum[i]) - 10); j++) {
            if (count === 0) {
            newOut = 'I' + newOut;
            } else if (count === 1) {
              newOut = 'X' + newOut;
            }
          }
        }
      
    }
    output = newOut + output;
    count++;
  }
  return output;
}

module.exports = romanNumeral;
