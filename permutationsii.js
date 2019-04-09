// https://leetcode.com/problems/permutations-ii/

var permuteUnique = function(nums) {
  return permutations(nums, memo={});
};

const permutations = function(nums) {
  if (nums.length <= 1) return [nums];
  
  let first = nums.shift();
  let perms = permutations(nums);
  let total = [];
  
  perms.forEach((el) => {
      for (let i = 0; i <= el.length; i++) {
          let temp = el.slice(0, i).concat(first, el.slice(i));

          if (!memo[temp]) {
              total.push(temp);
              memo[temp] = true;
          }
      }
  });
  
  return total;
};

