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
  var romanReturn = ''
  function whereToStart() {
  var romanArr = [[I,1], [V,5], [X,10], [L,50]]
    for(var i = 0; i < romanArr.length; i++) {
    // if((romanArr[i][1] - romanArr[i-1][1]) < romanArr[i-1][1]) {
    //   romanReturn +=
    //   }
     }
  }
}

module.exports = romanNumeral;
