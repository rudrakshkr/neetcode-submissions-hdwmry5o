class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        let current = [];

        function backtrack(start, remaining) {
            if(remaining < 0) return;

            if(remaining === 0) {
                result.push([...current]);
                return;
            }

            for(let i = start; i < nums.length; i++) {
                current.push(nums[i]);

                backtrack(i, remaining - nums[i]);

                current.pop();
            }
        }

        backtrack(0, target);

        return result;
    }
}
