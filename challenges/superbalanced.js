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

let phillip = new BinaryTree(10);
phillip.right = new BinaryTree(15);
phillip.left = new BinaryTree(5);
phillip.left.left = new BinaryTree(2);
phillip.left.right = new BinaryTree(6);


BinaryTree.prototype.searchLevel = function (tree) {
  
}

function superbalanced(tree) {
  if(!tree)return false;

}

console.log(superbalanced(phillip));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
