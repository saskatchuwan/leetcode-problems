#https://leetcode.com/problems/palindrome-number/
def isPalindrome(x):
  if x != abs(x):
      return False
  elif x < 10:
      return True
  
  store = []
  
  while x > 1:
      last_digit = x % 10
      rem = ( x - last_digit ) / 10
      store.append(int(last_digit))

      x = rem
  
  if x != 0:
      store.append(int(x))

  return store[::-1] == store