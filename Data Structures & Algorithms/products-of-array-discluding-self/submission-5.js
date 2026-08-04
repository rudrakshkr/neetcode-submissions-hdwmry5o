class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let leftProductArray = [1];
        let rightProductArray = [];

        for(let i = 1; i < nums.length; i++) {
            leftProductArray.push(leftProductArray[i - 1] * nums[i - 1]);
        }

        rightProductArray[nums.length - 1] = 1;
        
        for(let j = nums.length - 2; j >= 0; j--) {
            rightProductArray[j] = rightProductArray[j + 1] * nums[j + 1];
        }

        for(let k = 0; k < rightProductArray.length; k++) {
            rightProductArray[k] *= leftProductArray[k]
        }

        return rightProductArray;
    }
}
