class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for(let i = 0; i < nums.length; i++) {
            let searchNum = nums[i];
            nums[i] = "Searched";
            if(nums.includes(searchNum)) return true;
        }
        return false;
    }
}
