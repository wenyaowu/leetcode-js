/*
You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.

 

Example 1:

Input: amount = 5, coins = [1, 2, 5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
Example 2:

Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.
Example 3:

Input: amount = 10, coins = [10] 
Output: 1
 

Note:

You can assume that

0 <= amount <= 5000
1 <= coin <= 5000
the number of coins is less than 500
the answer is guaranteed to fit into signed 32-bit integer */
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const dp = new Array(coins.length+1).fill(0).map(()=>new Array(amount+1).fill(0));
    for(let i = 0; i<dp.length; i++) {
        dp[i][0] = 1;
    }
    // i => use first ith coins
    // j => amount of the money 
    // dp def: how many ways to make change for j amount using first ith coins
    for(let i = 1; i<dp[0].length; i++) {
        for(let j = 1; j<dp.length; j++) {
            let coinIdx = j-1;
            
            /**
             * using the ith coin, since we can use unlimited same coin, 
             * we need to know how many ways to make up amount j - coins[i-1] 
             * by using first i coins(including ith), which is dp[i][j-coins[i-1]]
             * 
             * j-coins[i-1] ensure that we need to use at least one ith coin
             */
            dp[i][j] = dp[i-1][j] + (j-coins[coinIdx] >= 0 ? dp[i][j-coins[coinIdx]] : 0); 
        }
    }
    return dp[coins.length][amout];
};