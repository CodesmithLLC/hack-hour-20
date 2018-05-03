/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  let result = true;
  const testTree = (newTree) => {
    if (newTree.left < newTree.value) {
      return testTree(newTree.left);
    } else {
      return false;
    }
    if (newTree.right > newTree.value) {
      return testTree(newTree.right);
    } else {
      return false;
    }
  }
  if (tree.value === null) { 
    return true;
  }
  testTree(tree);
return result;
  
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};

const A = new BinaryTree(5);
const B = new BinaryTree(3);
const C = new BinaryTree(7);
const D = new BinaryTree(2);
const E = new BinaryTree(4);
const F = new BinaryTree(6);
const G = new BinaryTree(8);
A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = F;
C.right = G;

console.log(superbalanced(A))