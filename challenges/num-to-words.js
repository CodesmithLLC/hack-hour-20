// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').

// FIXME
/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

const container = {
    0: {
        0: "Zero", 1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five", 6: "Six", 7: "Seven", 8: "Eight", 9: "Nine",
    },
    1: {
        0: "", 1: "Ten", 2: "Twenty", 3: "Thirty", 4: "Forty", 5: "Fifty", 6: "Sixty", 7: "Seventy", 8: "Eighty",9: "Ninety",
    },
    2: {
        0: "", 1: "OneHundred", 2: "TwoHundred", 3: "ThreeHundred", 4: "FourHundred", 5: "FiveHundred", 6: "SixHundred", 7: "SevenHundred", 8: "EightHundred", 9: "NineHundred",
    },
};

const places = {
    0: "",
    1: "Thousand",
    2: "Million",
    3: "Billion",
    4: "Trillion",
}

function numToWords(num) {
    let numArr = num.toString().split('').reverse();
    let result = "";

    for (let i = 0; i < numArr.length; i++) {
        if (places[Math.floor(i/3)]) result = places[Math.floor(i/3)] + result;
        result = container[i%3][numArr[i]] + result;
    }
    return result;
}

console.log(numToWords(0)) // -> 'Zero'
console.log(numToWords(43)) //-> 'FortyThree'
console.log(numToWords(2999)) //  -> 'TwoThousandNineHundredNintyNine'
console.log(numToWords(15)) // -> 'Fifteen'
// console.log(numToWords(2483579411)) // -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
// console.log(numToWords(300525151340440)) // -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
// console.log(numToWords(92120000000000000)) // -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'


module.exports = numToWords;
