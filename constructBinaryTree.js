// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;
  if (preorder.length === 1) return new TreeNode(preorder[0]);
  
  const rootVal = preorder.shift();
  const rootValInOrderIdx = inorder.indexOf(rootVal);
  const rootNode = new TreeNode(rootVal);
  
  let leftInOrder = inorder.slice(0, rootValInOrderIdx);
  let rightInOrder = inorder.slice(rootValInOrderIdx);
  
  let leftPreOrder = preorder.filter(el => leftInOrder.includes(el));
  let rightPreOrder = preorder.filter(el => rightInOrder.includes(el));
  
  rootNode.left = buildTree(leftPreOrder, leftInOrder);
  rootNode.right = buildTree(rightPreOrder, rightInOrder);
  
  return rootNode;
};

