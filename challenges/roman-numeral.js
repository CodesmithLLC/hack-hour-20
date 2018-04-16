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
                    //90
function romanNumeral(n) {
    function romanNumeral(n) {
        //ryans solution!!!!
        const values = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
        const numerals = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
        let romanStr = '';
       ​
        values.reduce((total, value, i) => {
         while (total >= value) {
          romanStr += numerals[i];
          total -= value;
         }
         return total;
        }, n);
        return romanStr;
       }
    // if(n<=0) return "nahhh man ...";  
    // arr1 = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"]; 
    // arr2 = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]; 

}

console.log(romanNumeral(90)); 
module.exports = romanNumeral;
