class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = new Array(nums.length).fill(1);

        for(let i = 1; i < result.length; i++) {
            result[i] = result[i - 1] * nums[i - 1]
        }

        let rightProduct = 1;

        for(let j = nums.length - 1; j >= 0; j--) {
            result[j] *= rightProduct;
            rightProduct *= nums[j];
        }

        return result;
    }
}
