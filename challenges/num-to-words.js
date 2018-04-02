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

function numToWords(num) {
  let str = num.toString();
  let result = '';

  const nums = { "1": "One", "2": "Two", "3": "Three", "4": "Four", "5": "Five", "6": "Six", "7": "Seven", "8": "Eight", "9": "Nine", "10": "Ten", "Eleven": "11", "Twelve": 12, "Thirteen": 13, "Fourteen": "14", "Fifteen": 15: "Sixteen": 16, "Seventeen": 17, "Eigteen": 18, "Nineteen": 19 };
  const tens = { "20": "Twenty", "30": "Thirty", "40": "Fourty","50": "Fifty","60": "Sixty", "70": "Seventy", "80": "Eighty", "90": "Ninety" }
  const scales = [ "Hundred", "Thousand", "Million", "Billion", "Trillion" ];

  for (let i = 0; i < str.length % 3; i++) {
    let diff = str.length - i;
    let chunk = substring(i, i + 2);
    console.log(chunk)
    if (diff === 1) result += nums[str.charAt(i)]
    else if (diff === 2 && s.charAt(i) === "1") result += nums[str]
  }
  return result;

  }

}

console.log(numToWords(0)) -> 'Zero'
console.log(numToWords(43)) -> 'FortyThree'
console.log(numToWords(299)) -> 'TwoHundredNintyNine'
console.log(numToWords(15)) -> 'Fifteen'

module.exports = numToWords;
