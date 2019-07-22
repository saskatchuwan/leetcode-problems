// https://leetcode.com/problems/balanced-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {boolean}
 */
const getHeight = function(root) {
  if (!root) return -1;
  
  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
};

const isBalanced = function(root) {
  if (!root) return true;
  
  let heightDiff = Math.abs(getHeight(root.left) - getHeight(root.right))
  
  if (heightDiff <= 1 && isBalanced(root.left) && isBalanced(root.right)) return true;
  return false;
};
