class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let dp = new Array(amount + 1).fill(Infinity);

        dp[0] = 0;

        for(let a = 1; a <= amount; a++) {
            for(let coin of coins) {
                if(a - coin >= 0) {
                    dp[a] = Math.min(dp[a], 1 + dp[a - coin])
                }
            }
        }

        return dp[amount] === Infinity ? -1 : dp[amount]
    }
}
