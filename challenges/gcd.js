/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
	let moreFactor;
	let lessFactor;
	const factorA = factor(a);
	const factorB = factor(b);
	if( a === undefined || b === undefined) return 0;
	if(b%a === 0) return a;
	if(a%b === 0) return b;
	if (factorA.length >= factorB.length) {
		moreFactor = factorA;
		lessFactor = factorB;
	} else {
		moreFactor = factorB;
		lessFactor = factorA;
	}
	for(let i = lessFactor.length-1; i >= 0; i-- ){
		if( moreFactor.includes(lessFactor[i])) {
			return lessFactor[i];
		}
	}
}

function factor(num) {
	const factor = [];
	for(let i = 1; i <= Math.floor(num/2); i++) {
		if(num % i === 0) factor.push(i);
	}
	factor.push(num);
	return factor;
}



module.exports = gcd;