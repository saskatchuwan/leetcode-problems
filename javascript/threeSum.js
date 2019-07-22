// https://leetcode.com/problems/3sum/
var threeSum = function(nums) {
  nums.sort((a, b) =>{
      return a - b;
  });
  
  let res = [];

  for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
          continue;
      }
      
      const first = nums[i];
      
      let rest = nums.slice(i + 1);
      
      const pairSumTarget = first * -1;
            
      let j = 0;
      let k = rest.length - 1;

      while (j < k) {
          const pairSum = rest[j] + rest[k];
          
          if (pairSum === pairSumTarget) {
              res.push([first, rest[j], rest[k]]);
              
              while (j < k && rest[j] === rest[j + 1]) {
                  j++;
              }
              
              while (j < k && rest[k] === rest[k - 1]) {
                  k--;
              }

              j++;
              k--;
          } else if (pairSum > pairSumTarget) {
              k--;
          } else {
              j++;
          }
      }
  }
  
  return res;
};