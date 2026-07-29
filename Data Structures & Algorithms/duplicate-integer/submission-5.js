class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hashMap = new Map();
    
        for(let i = 0; i < nums.length; i++) {
            let num = nums[i];
            if(hashMap.has(num)){
                return true;
            }
            else {
                hashMap.set(num, i)
            }
        }
        return false;
    }
}
