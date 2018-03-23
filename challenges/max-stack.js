/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

// function Stack() {
//   // body...

// }
class Stack {
  constructor() {
    this.container = {};
    this.length = 0;
    this.max = undefined;
  }
  push(e) {
    this.container[this.length++] = e;
    if (!this.max || e > this.max) this.max = e;
    return this.length;
  }
  pop() {
    let result = this.container[--this.length];
    delete this.container[this.length];
    if (this.length == 0) this.max = undefined;
    return result;
  }
  getMax() {
    return this.max;
  }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.pop();
myStack.pop();
console.log(myStack);
module.exports = Stack;