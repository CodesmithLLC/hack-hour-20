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
    const roman = { 1000 : 'M', 500 : 'D', 100 : 'C', 50 : 'L', 10 : 'X', 5 : 'V', 1 : 'I' };
    const arr = { M : 0 , D : 0, C : 0 , L : 0, X : 0, V : 0, I : 0};
    Object.keys(roman).reverse().forEach((num) => {
        num = parseInt(num);
        if(n/num!==0){
            arr[roman[num]] = ((n/num).toFixed(0));
            n = n % num;
        }
    });
    let result = '';
    Object.keys(arr).forEach((el) => {
        if(arr[el] !== 0) {
            for(let i = 0 ; i< arr[el] ; i++){
                result += el
            }
        }
    });
    return result;
}
console.log(romanNumeral(1141));
module.exports = romanNumeral
