//////////////////
///Needs Review///
//////////////////

/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

//loop version
function pow(base, power) {
    let result = base;
    power = power - 1;
    for(let i = 0; i < power; i++){
        result *= base;
    }
    return result;
}


//recursive version
function pow(base, power, accum = base) {
    if(power === 0) return 1;
    if(power === 1 )  return accum;
    accum *=base
    return pow(base, power-1, accum)
}

console.log(pow(3,3)); //-->27
module.exports = pow;
