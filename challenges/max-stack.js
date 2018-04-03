/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
	this.leng = 0;
	this.max = 0;
}

Stack.prototype.push = function(el) {
	if(el > this.max) {
		this.max = el;
	}
	Object.assign(this, { [this.leng] : el});
	return ++this.leng;
};

Stack.prototype.pop = function() {
	let deleted = this[this.leng-1];
	if(this.max === this[this.leng-1]){
		this.max = 0 ;
		delete this[this.leng-1];
		for (let i = 0 ; i < this.leng ; i++) {
			if (this[i] >= this.max) this.max = this[i];
		}
	}
	this.leng--;
	return deleted;
};

Stack.prototype.getMax = function() {
	if(this.leng === 0){
		return;
	}
	return this.max;
};
// let arr = new Stack();
// console.log(arr.push(15));
// console.log(arr.push(15));
// console.log(arr.push(15));
// console.log(arr.pop());
// console.log(arr.getMax());
// console.log(arr.pop());
// console.log(arr.pop());
// console.log(arr.getMax());
// console.log(arr);
module.exports = Stack;