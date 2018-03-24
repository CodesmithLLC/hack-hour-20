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
    let node = head;
    let array = [];
    while(node){
        array.push(node.value);
        node = node.next;
    }
    let result = new Node(array.pop())
    let resultPointer = result.next;
    while(array.length > 0){
        resultPointer = new Node(array.pop());
        resultPointer = resultPointer.next;
    }
    return result;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
