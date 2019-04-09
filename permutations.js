// https://leetcode.com/problems/permutations/
var permute = function(nums) {
  if (nums.length <= 1) return [nums];
  
  const first = nums.shift();
  let perms = permute(nums);
  
  let totalPermutations = [];
  
  perms.forEach ((el) => {
      for (let i = 0; i <= el.length; i++) {
          totalPermutations.push(el.slice(0, i).concat(first, el.slice(i)));
      }
  });
  
  return totalPermutations.sort();
};