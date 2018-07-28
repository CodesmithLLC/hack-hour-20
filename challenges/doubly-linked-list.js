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
  if (this.head === null && this.tail === null) {
    let myNode = new Node(val);

    this.head = myNode;
    this.tail = myNode;
    // this.tail = myNode;
  } else {
    let tmp = this.tail;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (this.head === this.tail && this.head.value === val) {
    console.log('they are equal!');
    this.head = null;
    this.tail = null;
  }
};

const myLinkedList = new LinkedList();
console.log(JSON.stringify(myLinkedList));
let myNode1 = new Node(1);
myLinkedList.add(myNode1);
// console.log(JSON.stringify(myLinkedList));
myLinkedList.remove(1);
console.log(JSON.stringify(myLinkedList));

module.exports = LinkedList;
