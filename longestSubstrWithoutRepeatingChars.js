// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
  let maxLength = 0;
  let store = [];
  
  for (let i = 0; i < s.length; i++) {
     if (store.includes(s[i])) {
         maxLength = Math.max(maxLength, store.length);
         store = store.slice(store.indexOf(s[i]) + 1);
     } 
      store.push(s[i])
  }
  
  return Math.max(maxLength, store.length);
};