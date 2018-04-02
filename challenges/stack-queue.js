/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.index = 0;
    this.stack = {};
    
    this.push = function(value) {
        this.stack[this.index] = value;
        this.index++;
        return this.index;
    };
    
    this.pop = function() {
        this.index--;
        let toRemove = this.stack[this.index];
        delete this.stack[this.index];
        return toRemove;
    };
    
    }


/**
* Queue Class
*/


function Queue() {
    this.stack1 = new Stack();
    this.stack1length = 0;
    this.stack2 = new Stack();
    
    this.enqueue = function(value) {
      this.stack1length = this.stack1.push(value);
      return this.stack1length;
    };
    
    this.dequeue = function() {
      for (let i = 0; i < this.stack1length; i++) {
        let addVal = this.stack1.pop();
        this.stack2.push(addVal);
      }
      let returnVal = this.stack2.pop();
      for (let i = 0; i < this.stack1length - 1; i++) {
        let addVal = this.stack2.pop();
        this.enqueue(addVal);
      }
      return returnVal;
       
    };
    
    }

module.exports = {Stack: Stack, Queue: Queue};

