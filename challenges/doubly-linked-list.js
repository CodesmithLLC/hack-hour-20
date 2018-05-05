/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val,next = null,prev = null) {
  this.val = val;
  this.next = next;
  this.prev = prev;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  console.log(this.head)
  if(this.head === null){
  let newNode = new Node(val)
   this.head = newNode
   this.tail = newNode 
  }
  let pointer = this.head
  let prevPointer
  while(pointer.next){
    prevPointer = pointer
    pointer = pointer.next;
  };
  let newNode = new Node(val,prevPointer,pointer)
  pointer.next = newNode;
  this.tail = newNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let pointer = this.head
  if(pointer.val === val){
    this.head = this.head.next
  }

  let prevPointer = null;
  while(pointer.val !== val){
    prevPointer = pointer;
    if(point.next === null){
      throw "Value not in list"
    }
    pointer = pointer.next;
  }
  if(pointer === this.tail){
    prevPointer = this.tail;
  }

  prevPointer = pointer.next;

};

module.exports = LinkedList;
