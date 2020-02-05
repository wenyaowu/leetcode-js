/**
 * You are given coins of different denominations and a total amount of money amount. 
 * Write a function to compute the fewest number of coins that you need to make up that amount. 
 * If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Note:
You may assume that you have an infinite number of each kind of coin.
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const cache = new Array(amount + 1).fill(-2);
  cache[0] = 0;
  backtracking(amount, 0);
  return cache[amount];

  function backtracking(remain) {
    if (cache[remain] !== -1) {
      return cache[remain];
    }
    if (cache[remain] === -2) {
      return -1;
    }
    let min = Number.MAX_SAFE_INTEGER;
    for (let num of coins) {
      if (remain - num >= 0) {
        let x = backtracking(remain - num);
        if (x !== -1) {
          min = Math.min(min, x + 1);
        }
      }
    }
    cache[remain] = min === Number.MAX_SAFE_INTEGER ? -2 : min;
    return cache[remain] === -2 ? -1 : cache[remain];
  }
};
