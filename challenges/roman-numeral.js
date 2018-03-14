/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1   :'I
' *      4   :'IV'
 *      5   :'V
' *      9   :'IX'
 *      10  :'X
' *      40  :'XL'
 *      50  :'L
' *      90  :'XC'
 *      100 :'C
' *      400 :'CD'
 *      500 :'D
' *      900 :'CM'
 *      1000:'M
' * 
 */

function romanNumeral(n) {
    if(n <= 0){
        return
    }
    const romanConv =[
        [1,'I'],
        [4,'IV'],
        [5,'V'],
        [9,'IX'],
        [10,'X'],
        [40,'XL'],
        [50,'L'],
        [90,'XC'],
        [100,'C'],
        [400,'CD'],
        [500,'D'],
        [900,'CM'],
        [1000,'M']
    ];
let result = '';
for(let i = romanConv.length -1; i >= 0; i--){
    while(romanConv[i][0] <= n){
     result += romanConv[i][1];
     n -= romanConv[i][0];
     }
}
return result;
}

module.exports = romanNumeral;
