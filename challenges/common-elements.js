// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

// function commonElements(array1, array2, array3, array4){
// 	const result = [];
// 	for (let i = 0; i < array1.length; i++) {
// 		if(array2.indexOf(array1[i]) >= 0) {
// 			if(result.indexOf(array1[i]) === -1) {
// 				result.push(array1[i]);
// 			}
// 		}
// 	}
// 	if(array3 === undefined && array4 === undefined) return result;
// 	return commonElements(result, commonElements(array3, array4));
// }

function commonElements(arr1, arr2, arr3, arr4) {
	const arr = [...rmDup(arr1),...rmDup(arr2),...rmDup(arr3),...rmDup(arr4)];
	const obj = {};
	for(let i = 0 ; i < arr.length; i++) {
		if(obj[arr[i]]) obj[arr[i]]++;
		else obj[arr[i]] = 1;
	}
	return Object.keys(obj).filter(key => obj[key] === 4);	
}

function rmDup(arr) {
	const temp = [];
	for(let i = 0 ; i < arr.length; i++) {
		if(temp.indexOf(arr[i]) === -1) {
			temp.push(arr[i]);
		}
	}
	return temp;
}

module.exports = commonElements;
