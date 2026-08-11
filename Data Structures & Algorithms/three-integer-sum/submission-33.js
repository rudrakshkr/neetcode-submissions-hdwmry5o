class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b);
        const result = [];
        for(let i = 0; i < nums.length; i++) {
            if(i > 0 && nums[i] === nums[i - 1]) continue;
                
            let target = -nums[i];
            
            let j = i + 1;
            let k = nums.length - 1;
            
            while(j < k) {
                if(nums[j] + nums[k] === target) {
                    result.push([nums[i], nums[j], nums[k]])
                
                    while (j < k && nums[j] === nums[j + 1]) j++;
                    while (j < k && nums[k] === nums[k - 1]) k--;
                    
                    j++
                    k--
                }
                else if(nums[j] + nums[k] > target) {
                    k--
                }
                else if(nums[j] + nums[k] < target) {
                    j++
                }
            }
        }
        
        return result;
        }
}
