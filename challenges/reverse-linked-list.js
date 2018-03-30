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
  if (!head || !head.next) return 'Cannot reverse'; 
  let currNode = head; 
  let prevNode; 
  let nextNode = head.next;
  while (nextNode.next) {
    prevNode = currNode; 
    currNode = nextNode; 
    nextNode = currNode.next;
    currNode.next = prevNode;
  }
  nextNode.next = currNode;
  head.next = null;
  return nextNode;
}

let node1 = new Node(1);
let node2 = new Node(2);
node1.next = node2;
let node3 = new Node(3);
node2.next = node3;
let node4 = new Node(4);
node3.next = node4;

console.log(reverseLinkedList(node1))


function numToWords(num) {
  let numArr = num.toString().split();
  let word = '';
  let obj = {'0' : 'Zero', '1': 'One', '2':'Two'}
  for (let i = numArr.length-1; i > 0; i--) {
    word += obj[numArr[i]
  }
  return word;
}

console.log(numToWords(2))


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
