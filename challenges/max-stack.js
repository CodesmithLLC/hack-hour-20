/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.count = 0;
  this.max = 0;
}

Stack.prototype.push = function(val){
  if(typeof val === 'number' && val > this.max){
    this.max = val;
  }
  this.storage[this.count] = val;
  this.count++;
  return this.count; 
}

Stack.prototype.pop = function(){
  this.count--;
  let result = this.storage[this.count] 
  delete this.storage[this.count];
  
  return result;
}

Stack.prototype.getMax = function(){
  return this.max;
}

let myArr = new Stack(); 
console.log(myArr);
console.log(myArr.push()); 
console.log(myArr); 
console.log(myArr.push());
console.log(myArr); 
console.log(myArr.pop());
console.log(myArr); 
console.log(myArr.pop());
console.log(myArr); 
console.log(myArr.push());
console.log(myArr) ;


module.exports = Stack;