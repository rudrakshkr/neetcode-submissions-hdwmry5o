class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        let result = [];

        // First Binary Search --> Keep checking left if target found
        while(l <= r) {
            let mid = Math.floor((l + r) / 2);

            if(nums[mid] === target) {
                result[0] = mid;
                r = mid - 1
            }
            else if(nums[mid] < target) {
                l = mid + 1;
            }
            else {
                r = mid - 1;
            }
        }

        // Second Binary Search --> Keep checking right if target found 
        l = 0;
        r = nums.length - 1;

        while(l <= r) {
            let mid = Math.floor((l + r) / 2);

            if(nums[mid] === target) {
                result[1] = mid;
                l = mid + 1;
            }
            else if(nums[mid] < target) {
                l = mid + 1;
            }
            else {
                r = mid - 1;
            }
        }

        return result.length === 2 ? result : [-1, -1];
    }
}
