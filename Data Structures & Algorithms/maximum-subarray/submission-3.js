class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = -Infinity;

        for(let i = 0; i < nums.length; i++) {
            let currSum = nums[i];
            maxSum = Math.max(maxSum, currSum);
            for(let j = i + 1; j < nums.length; j++) {
                currSum += nums[j];
                maxSum = Math.max(maxSum, currSum);
            }
        }

        return maxSum
    }
}
