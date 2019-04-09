// https://leetcode.com/problems/zigzag-conversion/

var convert = function(s, numRows) {
  if (numRows === 1 || numRows >= s.length) return s;
  
  let array = Array(numRows).fill('');
  
  let step = 0;
  let index = 0;
  
  s.split("").forEach (ch => {
      array[index] += ch;
      
      if (index === 0) {
          step = 1
      } else if (index === numRows - 1) {
          step = -1
      } else {
          
      }
      
      index += step;
  });
  
  return array.join("");
};