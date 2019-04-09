// https://leetcode.com/problems/longest-palindromic-substring/
var longestPalindrome = function(s) {
  let res = '';
  
  for (let i = 0; i < s.length; i++) {
      let odd = findPalindrome(s, i, i);
      let even = findPalindrome(s, i, i+1);
      
      if (odd.length > even.length) {
          if (odd.length > res.length) {
              res = odd;
          }
      } else if (even.length > odd.length) {
          if (even.length > res.length) {
              res = even;
          }
      }
  };
  
  return res;
};

var findPalindrome = function(str, leftIdx, rightIdx) {
  
  let palindrome = '';
  
  while (leftIdx >= 0 && rightIdx < str.length) {
      if (str[leftIdx] === str[rightIdx]) {
          palindrome = str.slice(leftIdx, rightIdx + 1);
      } else {
          break;
      }
      
      leftIdx -= 1;
      rightIdx += 1;
  }

  
  return palindrome;
}
