/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
	let curr = head;
	let prev = null;
	let nextNode = null;
	while(curr !== null) {
		nextNode = curr.next;
		curr.next = prev;
		prev = curr;
		curr = nextNode;
	}
	return prev;
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
a.next = b;
b.next = c;
console.log(reverseLinkedList(a));
module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
