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

function superbalanced(tree, height=0) {
	const temp = tree;
	if (tree.left === null && tree.right === null) return true;
	if (temp.left && temp.right) {
		if (temp.left.value < temp.value && temp.right.value > temp.value) {
			height++;
			return Math.abs(superbalanced(temp.left) - superbalanced(temp.right)) <= 1;
			
		} else {
			return false;
		}
	} else if (temp.left === null && temp.right !== null ) {
		if(temp.right.value > temp.value) {
		}
	}
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
