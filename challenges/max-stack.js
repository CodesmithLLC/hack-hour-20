/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

// function Stack() {
// 

//   stack.prototype.push(Element) {
     
//   }

//   stack.prototype.pop(Element) {
     
//   }

//   stack.prototype.getMax(Element) {
     
//   }
// }

// module.exports = Stack;


function Stack() {
  this.storage = {};
  this.length = 0;
  this.max = -Infinity;
}

Stack.prototype.push = function(val) {
  if(this.max < val) this.max = val;
  this.storage[this.length] = val;
}

Stack.prototype.pop = function() {
  const val = this.storage[--this.length];
  delete this.storage[this.length];
  return val;
}

const s = new Stack();
s.push(3);
s.push(4);

console.log(s);