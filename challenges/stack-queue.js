/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	this.storage = new Array(0);
	this.length = 0;
}

Stack.prototype.push = function(el) {
	if(this.length === 0) {
		this.storage[0] = el;
		this.length++;
	} else {
		this.storage = this.storage.concat([el]);
		this.length++;
	}
}

Stack.prototype.pop = function() {
	if(this.length !== 0) {
		const popped = this.storage.slice(-1)[0];
		this.storage = this.storage.slice(0,--this.length);
		return popped;
	} else {
		return undefined;
	}
}

const test = new Stack();
test.push(0);
test.push(1);
console.log(test.pop());
console.log(test.pop());

/**
* Queue Class
*/

function Queue(stack1, stack2) {
	this.stackIn = stack1;
	this.stackOut = stack2;
	this.stackOut.push(this.stackIn.pop());
}

module.exports = {Stack: Stack, Queue: Queue};
