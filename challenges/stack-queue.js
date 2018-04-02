/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.stack = new Array();
    this.push = (item) => {
        return this.stack.push(item)
    }
    this.pop = () => {
        return this.stack.pop();
    }
}


/**
* Queue Class
*/


function Queue() {
this.stack = new Array();
this.enqueue=function(item){
    this.stac.unshift(item);
   }
this.dequeue=function(){
    return this.stac.pop(); 
   } 
}

module.exports = {Stack: Stack, Queue: Queue};
