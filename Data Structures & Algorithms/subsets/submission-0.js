class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    constructor() {
        this.result = [];
    }

    backtrack(nums, index, current) {
        if(index === nums.length) {
            this.result.push([...current]);
            return;
        }

        current.push(nums[index]);
        this.backtrack(nums, index + 1, current);

        current.pop();

        this.backtrack(nums, index + 1, current);
    }

    subsets(nums) {
        this.result = [];
        
        const current = [];
        this.backtrack(nums, 0, current);

        return this.result
    }
}
