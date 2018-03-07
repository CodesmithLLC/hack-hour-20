/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

const pow = (base, power) => power !== 0 && power > 0 ? base * pow(base, power - 1) : power !== 0 && power < 0 ? pow(base, power + 1) / base : 1;

module.exports = pow;
