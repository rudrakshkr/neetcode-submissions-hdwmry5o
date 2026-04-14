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

// nums = [1, 2, 3, 4]
// outputArr = [1, 1, 2, 6] --->
// postfix = 1

// i = 4 --> postfix = 1 --> outputArr[3] = 6 * 1 = 6
// i = 3 --> postfix = 1 * 4 = 4 --> outputArr[2] = 2 * 4 = 8
// i = 2 --> postfix = 4 * 3 = 12 --> outputArr[1] = 1 * 12 = 12
// i = 1 --> postfix = 12 * 2 = 24 --> outputArr[0] = 1 * 24 = 24
