class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const uniqueArr = [...new Set(nums)];
        let start = 0;
        let l = 0;
        let r = 1;
        let finalMaxFreq = 1;
        let maxFreq = 1;

        if(nums.length === 0) return 0;
        
        let nums_asc = uniqueArr.sort((a,b) => a - b);
        console.log(nums_asc)
        
        while(start !== nums_asc.length) {
            if(nums_asc[r] - nums_asc[l] === 1){
                l += 1;
                r += 1;
                maxFreq += 1
            }
            else{
                start += 1;
                l = start;
                r = start + 1;
                finalMaxFreq = Math.max(finalMaxFreq, maxFreq);
                maxFreq = 1;
            }
        }
        
        return finalMaxFreq;
    }
}
