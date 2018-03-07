/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, total = 1) {
    if(power === 1){
        return base;
    }else{ 
        total = pow(base,power-1,total);
        return total*base;
    } 
}
console.log(pow(5,10));
module.exports = pow;
