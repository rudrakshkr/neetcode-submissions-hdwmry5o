class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const profitArray = [];
        for(let i = 0; i < prices.length; i++) {
            for(let j = i + 1; j < prices.length; j++) {
                if(prices[i] > prices[j]) continue;
                profitArray.push(prices[j] - prices[i])
            }
        }
        
        return profitArray.length !== 0 ? Math.max(...profitArray) : 0;
    }
}
