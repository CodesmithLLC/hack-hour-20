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
  const newNode = new Node(val);
  if (this.head === null) { 
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let start = this.head;
  while (start.next !== null) {
    if(start.val === val) {
      if(start === this.tail) {
        start.prev.next = null;
        this.tail = start.prev;
      } else {
        start.prev.next = start.next;
        start.next.prev = start.prev; 
      }
      delete start;
    }
    start = start.next;
  }
};

module.exports = LinkedList;

let list = new LinkedList;
list.add(25);
list.add(26);
list.add(27);
list.add(28);
console.log(list.head);
