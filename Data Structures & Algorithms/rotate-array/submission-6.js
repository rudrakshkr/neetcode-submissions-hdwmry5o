class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        k = k % nums.length;

        function reverse(left, right) {
            while(left < right) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++;
                right--;
            }
        }
        // Reverse the entire array
        reverse(0, nums.length - 1);

        // Reverse the first k elements
        reverse(0, k - 1);

        // Reverse the remaining elements
        reverse(k, nums.length - 1);

    }
}
