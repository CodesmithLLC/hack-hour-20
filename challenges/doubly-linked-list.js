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
  let current = this.head;
  let prev = this.head;
  if(!head) {
    current = new Node(val)
    return current;
  } else {
    while(current && current.next) {
      prev = current;
      current = current.next;
    }
    if(current.next = null) current.next = current.prev
  }
  return LinkedList
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let current = this.head;
  let prev = this.head;
  if(current.val = val) {
    current = current.next;
    if(current) current.prev = null;
    return current
  }
  while(current.next) {
    if(current.val === val) {
      prev.next = current.next;
      current.next.prev = prev;
      return this.head
    }
    prev = current;
    current = current.next;
  }
  if(current.val === val) {
    prev.next = null
  }
  return LinkedList;
};

module.exports = LinkedList;
