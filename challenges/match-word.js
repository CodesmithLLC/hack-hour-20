// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.



function matchWord(str) {
	if (str === '' ) return true;
	str = str.replace(/\s/g,'');
	let matched = str.match(/\B\w[^a-zA-Z0-9]+\w/g);
	return matched.map(w=> w.charAt(0).toLowerCase() == w.charAt(w.length-1).toLowerCase() ? true : false)[0];

}
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
// console.log(matchWord('__ENDDNE__'));  //-> false       (not separated by a space)
// console.log(matchWord('__END_DNE-----'));  //-> true
// console.log(matchWord('IF()()fi[]'));  //-> true        (should be case-insensitive)
// console.log(matchWord('for__if__rof__fi'));  //-> false     not properly closed. like ( [) ] 
// console.log(matchWord(''));  //-> true
module.exports = matchWord;