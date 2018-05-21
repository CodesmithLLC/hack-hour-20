/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {
  //create new array to hold all vals of permutations
  let totalsArr = []
  
  //iterate over items
  for(let i = 0; i < items.length; i++) {
    console.log(items[i])
    
  }
  //add vals to cw
  //sub cw from wa
  //if less than difference above replace difference
  //after iterate through all possibilities return diff
};

module.exports = solveKnapsack;
