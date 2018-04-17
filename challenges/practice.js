
// function BST(val) {
//   this.value = val;
//   this.left = null;
//   this.right = null;
// }

// BST.prototype.add = function(val) {
//   if(this.value > val) {
//     if(!this.left) {
//       this.left = new BST(val)
//     }else {
//       this.left.add(val);
//     }
//   }else if(this.value < val) {
//     if(!this.right) {
//       this.right = new BST(val);
//     }else {
//       this.right.add(val);
//     }
//   }
// }

// const b = new BST(5);
// b.add(3);
// b.add(7);
// b.add(2);
// b.add(10);
// console.log(b);




// [1,2,3,4,5,8]


function LinkedList() {
  this.head = null
}

LinkedList.prototype.add = function(val) {
  if(!this.head) this.head = new Node(val);
  else {
    let curr = this.head;
    while(curr.next) {
      curr = curr.next
    }
    curr.next = new Node(val);
  }
}

LinkedList.prototype.addAt = function(val, index) {
  let currIndex = 0;
  let curr = this.head;
  let prev = null;
  const node = new Node(val)

  while(currIndex < index) {
    prev = curr
    curr = curr.next
    currIndex++
  }
  prev.next = node;
  node.next = curr;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

const l = new LinkedList();
l.add('pizza');
l.add('tacos');
l.add('plums');
l.add('gummy bears');
l.addAt('burrito,2')
console.log(l)
