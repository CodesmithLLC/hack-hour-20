/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = {};
  this.count = 0;
  this.push = (val) => {
    this.storage[++this.count] = val;
    return this.count; 
  }
  this.pop = () => {
    if(this.count === 0){
      return;
    }
   let output = this.storage[this.count];
   delete this.storage[this.count];
   this.count -= 1;
   return output;
  }
}

module.exports = Stack;
let stack = new Stack;
console.log(stack.push('taco'));
console.log(stack.push('taco'));
console.log(stack.push('beef supreme'));
console.log(stack.push('enchilada'));
console.log(stack.push('burrito'));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
