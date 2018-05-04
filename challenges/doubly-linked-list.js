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
  if(!this.head && !this.tail){
    this.head = new Node(val);
    this.tail = this.head
    // this.tail.prev = this.head;
  }else{
    let last = this.tail;
    this.tail = new Node(val);
    last.next = this.tail;
    this.tail.prev = last;
  }
};

/*
Removes the first node with the inputted value
*/
LinkedList.prototype.remove = function(val) {
  //set a current to keep track of where you are in the list
  let current = this.head;
  //while there is another node in the list keep going
  while(this.head.val){
    //check if the current node is the one your need to remove
    if(current.val === val){
      //Before deleting check if its the head node.
      //If it is reset the head node
      if(current === this.head){
        this.head = current.next;
      }
      //Before deleting check if its the tail node.
      //If it is reset the tail node
      if(current === this.tail){
        this.tail === current.prev;
      }
      //Delete current node by removing its references in the list
      current.prev.next = current.next;
      return;
    }
      current = current.next
  }
};

let phillip = new LinkedList();

phillip.add('yo');
phillip.add('taco');
phillip.add('water');
phillip.add('coffee');
phillip.add('burrito');
phillip.remove('taco');
console.log(phillip, '<----phillip');

console.log('===test===')
// console.log(phillip.tail.prev.prev.val);
module.exports = LinkedList;
