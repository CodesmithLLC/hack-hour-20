/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.storage = {};
    this.length = 0;
    this.push = (val)=>{
        this.storage[this.length] = val;
        this.length++
    }
    this.pop = ()=>{
        let popped = this.storage[this.length - 1];
        delete this.storage[this.length - 1];
        return popped;
        this.length--;
    }
}

let phillip = new Stack();

phillip.push('taco');
phillip.push('coffee');
console.log(phillip);
console.log(phillip.pop());
console.log(phillip)


/**
* Queue Class
*/


function Queue() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.enqueue = (val)=>{
        this.stack1.push(val);
    };
    this.denqueue = ()=>{
        for(let i = 0; i < this.stack1.length; i++){
            this.stack2.push(this.stack1.pop())
            console.log(this.stack1, 'stack should be empty');
        }
    };
}

module.exports = {Stack: Stack, Queue: Queue};
