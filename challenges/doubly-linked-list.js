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
  if (this.head === null) {
    this.head = new Node(val);
    this.tail = this.head;
  } else {
    let curNode = this.head;
    while (curNode.next) {
      curNode = curNode.next;
    }
    curNode.next = new Node(val);
    curNode.next.prev = curNode;
    this.tail = curNode.next;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (this.head && this.tail) {
  let curNode = this.head;
  while (curNode.val !== val && curNode.next) {
    curNode = curNode.next;
  }
  if (curNode.val === val) {
    if (curNode === this.head && curNode === this.tail) {
      this.head = null;
      this.tail = null;
    } else if (curNode === this.head) {
      this.head = curNode.next;
      curNode.next.prev = null;
    } else if (curNode === this.tail) {
      this.tail = curNode.prev;
      curNode.prev.next = null;
    } else {
      curNode.prev.next = curNode.next;
      curNode.next.prev = curNode.prev;
    }

  }
  }
}

module.exports = LinkedList;
