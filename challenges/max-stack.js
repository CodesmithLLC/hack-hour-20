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
  this.max = {
    id: -1,
    val: Number.NEGATIVE_INFINITY
  };
  this.push = (val) => {
    if(val > this.max){
      this.max = val;
    }
    this.storage[++this.count] = val;
    return this.count; 
  }
  this.pop = () => {
    if(this.count === 0){
      return;
    }
   let output = this.storage[this.count];
   if(output === this.max){
     
   }
   delete this.storage[this.count];
   this.count -= 1;
   return output;
  }

  this.getMax = () => {
    return this.max.val;
  }
}

module.exports = Stack;
let stack = new Stack;
console.log(stack.push(1));
console.log(stack.push(4));
console.log(stack.push(20));
console.log(stack.push(8));
console.log(stack.getMax());
console.log(stack.push(40));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.getMax());

