class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = 1;
        let outputArr = [1];
        
        for(let i = 0; i < nums.length - 1; i++) {
            prefix *= nums[i]
            outputArr.push(prefix);
        }
        
        let postfix = 1;
        
        for(let i = nums.length; i > 0; i--) {
            if(i !== nums.length) postfix *= nums[i]
            outputArr[i - 1] *= postfix
        }
        
        return outputArr;
    }
}
