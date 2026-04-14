class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // BRUTE FORCE
        // const profitArray = [];
        // for(let i = 0; i < prices.length; i++) {
        //     for(let j = i + 1; j < prices.length; j++) {
        //         if(prices[i] > prices[j]) continue;
        //         profitArray.push(prices[j] - prices[i])
        //     }
        // }
        
        // return profitArray.length !== 0 ? Math.max(...profitArray) : 0;

        // Sliding Window i guess?
        let l = 0;
        let r = 1;
        let maxP = 0;
        
        while(r < prices.length) {
            if(prices[l] < prices[r]) {
                let profit = prices[r] - prices[l]
                maxP = Math.max(maxP, profit);
            }
            else {
                l = r
            }
            r += 1
        }
            
        return maxP;
    }
}
