/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.storage = [];
    this.push = (x)=>{ return this.storage.push(x)};   
    this.pop = (x)=>{ 
        if(this.storage.length === 0){
            return undefined;
        } else {
            return this.storage.pop(x);
        }
    }
}


/**
* Queue Class
*/


function Queue() {
    //BLAGH!!!
    this.actualQueue = new Stack;
    this.placeholder = new Stack; 
    this.enqueue = actualQueue.push(x)
    this.dequeue = (x)=>{
        if(actualQueue.length  < 1){
            return undefined;
        }
        while(actualQueue.length > 1){
            placedholder.push(actualQueue.pop());
        }
        let result = actualQueue.pop()
        while(placeholder.length > 0){
            actualQueue.push(placeholder.pop())
        }
        return result;
    }

}

module.exports = {Stack: Stack, Queue: Queue};
