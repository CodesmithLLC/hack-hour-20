/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, result = base) {
if(power === 1) return result;
if(power === 0) return 1;
return pow(base, --power, base * result)
}

module.exports = pow;