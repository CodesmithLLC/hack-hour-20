//////////////////
///Needs Review///
//////////////////


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

let a = new Node('taco');
let b = new Node('water');
let c = new Node('coffee');
let d = new Node('almonds');

a.next = b;
b.next = c;
c.next = d;

// console.log(JSON.stringify(a));

function reverseLinkedList(head, foo = 'foo') {
    console.log(head, "<=======head")
    //Target the last node and set its next prop to the
    if(head.next === null)return foo;
    let originalHead = head;
    let current = head;
    console.log(JSON.stringify(head), '<========head');
    let previous = null;
    while(current.next !== null){
        console.log(current.next.value, '<-----current.next');
        previous = current;
        current = current.next;
    }
    console.log('the prev value was', previous);
    console.log('actual current value', current);
    current.next = previous;
    previous.next = null;
    reverseLinkedList(originalHead, );
}

console.log(reverseLinkedList(a));
module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
