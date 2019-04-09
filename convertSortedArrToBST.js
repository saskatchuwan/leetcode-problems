// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null;
  
  let midIdx = Math.floor(nums.length / 2);
  
  const left = nums.slice(0, midIdx);
  const right = nums.slice(midIdx+1);
  
  let rootNode = new TreeNode(nums[midIdx]);
  rootNode.left = sortedArrayToBST(left);
  rootNode.right = sortedArrayToBST(right);
  
  return rootNode;
};






