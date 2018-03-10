/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

const pow = (base, power, result = 1) => {
    if (!Number.isInteger(power)) return "Please enter power as integer"
    if (power === 0) return result;
    if (power < 0)
        return pow(base, power + 1, result * (1 / base))
    if (power > 0)
        return pow(base, power - 1, result * base)
}


module.exports = pow;
