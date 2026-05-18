class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let n = nums.length;

        let currentMin = nums[0];
        let currentMax = nums[0];
        let maxProd = nums[0];

        for(let i = 1; i < n; i++) {
            let temp = Math.max(nums[i], nums[i] * currentMax, nums[i] * currentMin);

            currentMin = Math.min(nums[i], nums[i] * currentMax, nums[i] * currentMin);

            currentMax = temp;

            maxProd = Math.max(maxProd, currentMax);
        }

        return maxProd
    }
}
