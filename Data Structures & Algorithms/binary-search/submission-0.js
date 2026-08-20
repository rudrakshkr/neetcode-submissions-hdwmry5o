class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        return nums.indexOf(target);
        // let mid = Math.floor(nums.length / 2);

        // if(nums[mid] === target) {
        //     return nums.indexOf(nums[mid]);
        // }
    }
}
