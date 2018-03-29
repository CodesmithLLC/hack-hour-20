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
const threeDigit = (num) =>{
	const oneDigit = num%10;
	const twoDigit = Math.floor(num%100/10);
	const threeDigit = Math.floor(num%1000/100);
	let result = [];
	const zeros = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
	const ones = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Ninteen'];
	const tens = ['','Ten', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninty'];
	if(num === 0) return 'zero';
	if(num % 1000 > 0) {
		if(twoDigit === 1) result.unshift(ones[num%10]);
		else if (twoDigit < 1) result.unshift(zeros[num%10]);
		else if (num%10 !== 0) result.unshift(tens[twoDigit]+zeros[oneDigit]);
		else result.unshift(tens[twoDigit]);
		if(threeDigit !== 0) result.unshift(zeros[threeDigit]+'Hundred');
	}
	return result.join('');
}

function numToWords(num) {
	
	const final = [];
	if (num / 1 % 1000) {
		final.unshift(threeDigit(num%1000));
	}
	if (Math.floor(num / 1000) % 1000 !== 0) {
		final.unshift(threeDigit(Math.floor(num/1000))+'Thousand');
	}
	if (Math.floor(num / 1000000) % 1000 !== 0) {
		final.unshift(threeDigit(Math.floor(num /1000000)) +'Million');
	}
	if (Math.floor(num / 1000000000) % 1000 !== 0) {
		final.unshift(threeDigit(Math.floor(num/1000000000)) +'Billion');
	}
	if (Math.floor(num / 1000000000000) % 1000 !== 0) {
		final.unshift(threeDigit(Math.floor(num/1000000000000)) +'Trillion');
	}
	if (Math.floor(num / 1000000000000000) % 1000 !== 0) {
		final.unshift(threeDigit(Math.floor(num /1000000000000000)) +'Quadrillion');
	}

	return final.join('');
}
console.log(numToWords(19231238084));

module.exports = numToWords;
