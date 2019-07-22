// https://leetcode.com/problems/container-with-most-water/
var maxArea = function(height) {
  let max = null;
  
  for (let i = 0; i < height.length - 1; i++) {
      for (let j = i + 1; j < height.length; j++) {
          const w = j - i;
          const l = Math.min(height[i], height[j]);
          const area = w * l;
          
          if (!max || area > max) {
              max = area;
          }
      }
  }
  
  return max;
};