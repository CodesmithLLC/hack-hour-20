/**
 * applies the invoked array to the function's parameter list
 * Example:
 *   var jae = function(name, age, location) {
 *     return name + " is " + age + " and he lives in " + location;
 *   };
 *
 *   var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
 *   jaero(); //Returns "Jae is 19 and he lives in South Carolina"
 *
 * Another Example:
 *   var jasmine = function(name, age) {
 *     if(!age){
 *       return "We don't know how old " + name + " is!";
 *     }
 *
 *     else{
 *       return name + " is " + age + " years old!";
 *     }
 *   };
 *
 *   var jmoney = applyIt(jasmine, ["Jasmine"]);
 *   jmoney(); //Returns "We don't know how old Jasmine is!"
 *
 *  DO NOT USE THE BUILT IN APPLY METHOD OR THE SPREAD OPERATOR
 */



function applyIt(func, args) {
	let spread = '';
	let result = {};
	args.forEach((arg, i) => {
		let value = arg;
		result[`arg${i}`] = function(){return value};
	})
	for(key in result) {
		if(key !== Object.keys(result).slice(-1)[0]){
			if(typeof result[key]() === 'string') spread += `"${result[key]()}", `;
			else spread += `result.${key}(), `;
		} else {
			if(typeof result[key]() === 'string') spread += `"${result[key]()}", ` ;
			else spread += `result.${key}()`;
		}
	}
	const output = (result) => {
		for(key in result) {
			if(key !== Object.keys(result).slice(-1)[0]){
				if(typeof result[key]() === 'string') spread += `"${result[key]()}", `;
				else spread += `${result[key]}()`;
			} else {
				if(typeof result[key]() === 'string') spread += `"${result[key]()}", ` ;
				else spread += `result.${key}()`;
			}
		}
		return 
	}

	const apply = () => {
		return func(eval(spread));
	}
	return apply;
}

var jasmine = function(name, age) {
   if(!age){
     return "We don't know how old " + name + " is!";
   }
   else{
     return name + " is " + age + " years old!";
   }
 };
 var jmoney = applyIt(jasmine, ["Jasmine", 1]);

console.log(jmoney());
module.exports = applyIt;
