//////////////////
///Needs Review///
//////////////////

/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
    if(typeof str !== 'string') return false;
    if (str.length === 1) return true;

    for (let i = 0; i < str.length - 1; i++) {
        if (str.slice(i + 1).indexOf(str[i]) !== -1) {
            let subString = str.slice(i);
            let revSubString = subString.split('').reverse().join('');
            if (subString === revSubString) return true;
        }
    }//end of forloop
    return false
}

// console.log(`should be true: `)
// console.log(permPalin('abab'));
// console.log(permPalin('cbaba'));
// console.log(permPalin('a'));
// console.log(`should be false: `)
// console.log(permPalin('cbac'));

module.exports = permPalin;