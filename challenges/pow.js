/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if (power === 0) {
        return 1;
    }
    else {
        if (power < 0) /* neg exp */ {
            return 1 / base * pow(base, - (Math.abs(power) - 1));
        }
        return base * pow(base, power - 1);
    }
}

console.log(pow(2, -3));
console.log(pow(2, -2));
console.log(pow(2, -1));

module.exports = pow;
