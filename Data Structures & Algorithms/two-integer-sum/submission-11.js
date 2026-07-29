class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hash = new Map();
    
        for(let i = 0; i < nums.length; i++) {
            let num = nums[i];
            let difference = target - num;

            if(hash.has(difference)) {
                return [hash.get(difference), i]
            }
            else {
                hash.set(num, i)
            }
        }
    }
}
