/**
 * Create a stack.Then create a queue using two stacks.
 */



function Stack() {
  this.storage = {};
  this.index  = 0;
  this.push = (item) => {
    this.storage[this.index] = item;
    return ++this.index;
  }
  this.pop = () => {
    let popped = this.storage[this.index];
    delete this.storage[this.index--];
    return popped;
  }
}


/**
* Queue Class
*/


function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
  this.length1 = 0;
  this.length2 = 0;
  this.enqueue = (item) => {
    this.length1++;
    return this.stack1.push(item);
  }
  this.dequeue = () => {
    while(length1 != 0){
      this.stack2.push(this.stack1.pop());
      length1--;
      this.length2++; 
    }
   let item = this.stack2.pop();
   while(length2 != 0){
    this.stack1.push(this.stack2.pop());
    length2--;
    this.length1++; 
  }
  return item;
  }
}

module.exports = {Stack: Stack, Queue: Queue};