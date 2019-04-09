//  https://leetcode.com/problems/coin-change-2/

/*
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

var change = function(amount, coins, memo={}) {
  let key = amount + '-' + coins;
  
  if (key in memo) return memo[key];
  
  if (amount === 0) return 1;
  
  let coin = coins[coins.length - 1];
  
  let count = 0;
  
  for (let i = 0; i * coin <= amount ;i++) {
      count += change(amount - (i * coin), coins.slice(0, -1), memo);
  }
  
  memo[key] = count;
  return memo[key];
};