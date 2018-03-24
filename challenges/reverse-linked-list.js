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
let l1 = new Node(1);
let l2 = new Node (2);
let l3 = new Node(3);
l1.next = l2;
l2.next = l3;

function reverseLinkedList(head) {
    let curNode = head;
    let prevNode = null;
    let nextNode = null;
    while ( curNode !== null){
        nextNode = curNode.next;
        curNode.next = prevNode;
        prevNode = curNode
        curNode = nextNode;
    }
    head = prevNode
    return head
}


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
