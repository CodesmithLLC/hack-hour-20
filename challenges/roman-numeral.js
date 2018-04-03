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
    let result = '';
    let numerals = {
        1000 : 'M',
        900 : 'CM',
        500 : 'D',
        400 : 'CD',
        100 : 'C',
        90 : 'XC',
        50 : 'L',
        40 : 'XL',
        10 : 'X',
        9 : 'IX',
        5 : 'V',
        4 : 'IV',
        1 : 'I',
    }
    let keyArr = Object.keys(numerals);
    for (let i = keyArr.length-1; i >= 0; i--) {
        let num = Math.floor(n / keyArr[i]);
        n = n % keyArr[i];
        for (let j = 0; j < num; j++) {
            result += numerals[keyArr[i]];
        }
    }
    return result;
}
console.log(romanNumeral(450));
module.exports = romanNumeral;
