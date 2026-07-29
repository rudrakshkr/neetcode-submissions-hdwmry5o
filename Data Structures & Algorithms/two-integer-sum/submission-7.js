class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hash = new Map();
    
        for(let i = 0; i < nums.length; i++) {
            let difference = target - nums[i];
            if(hash.has(difference)) {
                return [hash.get(difference), i]
            }
            else {
                hash.set(nums[i], i)
            }
        }
        return "No such indices"
    }
}
