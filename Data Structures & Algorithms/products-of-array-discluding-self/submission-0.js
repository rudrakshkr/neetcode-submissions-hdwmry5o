class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let newArr = []
        let product = 1;
        
        for(let i = 0; i < nums.length; i++) {
            for(let j = 0; j < nums.length; j++) {
                if(j === i) continue;
                product *= nums[j]
            }
            newArr.push(product)
            product = 1;
        }
        
        return newArr
    }
}
