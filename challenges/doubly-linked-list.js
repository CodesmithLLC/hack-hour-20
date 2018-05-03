/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
	const node = new Node(val);
	node.prev = this.tail;
	this.tail.next = node;
	this.tail = node;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
	let temp = this.head;
	if(this.head.val === val) {
		this.head = this.head.next;
		this.head.prev = null;
	} else if( this.tail.val === val) {
		this.tail = this.tail.prev;
		this.tail.next = null;
	} else {
		while(temp !== null) {
			if(temp.val === val) {
				temp.prev.next = temp.next;
				temp.next.prev = temp.prev;
				break;
			} else {
				temp = temp.next;
			}
		}
	}
};

module.exports = LinkedList;
