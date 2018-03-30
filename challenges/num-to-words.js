// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

 // input: a number
 //output: a string represntation of the number

 // we must get the place value of the number
 //convert number to a string and get lenght
 // create array of number strings
 // declare a varaible place value equal 10 to the power of length -1
 // create object of number : wordNumber value pairs
 // declare a string result acumulator 
  // iterate from the front of array of numberStrings
  // find value of string number add place value


function numToWords(num) {
    let pow = num.toString().length-1;
    let placeValue = Math.pow(10,pow);
    let arrayOfNum = num.toString().split('');
    let objNumToWords = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7':'seven',
        '8':'eight',
        '9': 'nine',
        '100':'hundred',
        '1000': 'thousand',
    };
    let resultAcc = '';
    for ( let i = 0; i < arrayOfNum.length; i++){
        if (arrayOfNum[i] === '0') continue;

        resultAcc += objNumToWords[arrayOfNum[i]] + objNumToWords[Math.pow(10,pow)];
        pow--;
    }

return resultAcc

}
console.log(numToWords(9168))

module.exports = numToWords;
