/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let tmp = array[i];
    array[i] = 1;
    result.push(array.reduce((a, b) => a * b));
    array[i] = tmp;
  }
  return result;
}

function getAllProducts2(array) {
  let result = [];
  let product = array.reduce((a, b) => a * b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      result.push(product / array[i]);
    } else {
      result.push(product);
    }
  }
  return result;
}

// THIS ONE WORKS!
function getAllProducts3(array) {
  if (array.length < 2) return [0];
  const productsUpTo = [];
  const products = [];
  let currProduct = 1;
  for (let i = 0; i < array.length; i++) {
    productsUpTo[i] = currProduct;
    currProduct *= array[i];
    console.log(productsUpTo);
  }

  currProduct = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(`${currProduct} * ${productsUpTo[i]}`);
    products[i] = currProduct * productsUpTo[i];
    console.log(`currProd ${currProduct} * array[i] ${array[i]}`);
    
    currProduct *= array[i];
    console.log(products);
  }
  return products;
}
console.log(getAllProducts3([2]));
console.log(getAllProducts3([1, 7, 3, 4])); // ->  [84, 12, 28, 21])

module.exports = getAllProducts;
