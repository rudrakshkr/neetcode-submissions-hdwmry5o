class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // BRUTE FORCE
        // const uniqueArr = [...new Set(nums)];
        // let start = 0;
        // let l = 0;
        // let r = 1;
        // let finalMaxFreq = 1;
        // let maxFreq = 1;

        // if(nums.length === 0) return 0;
        
        // let nums_asc = uniqueArr.sort((a,b) => a - b);
        // console.log(nums_asc)
        
        // while(start !== nums_asc.length) {
        //     if(nums_asc[r] - nums_asc[l] === 1){
        //         l += 1;
        //         r += 1;
        //         maxFreq += 1
        //     }
        //     else{
        //         start += 1;
        //         l = start;
        //         r = start + 1;
        //         finalMaxFreq = Math.max(finalMaxFreq, maxFreq);
        //         maxFreq = 1;
        //     }
        // }
        
        // return finalMaxFreq;


        // IDK GOOD APPROACH?
        const numSet = new Set(nums);
        let longestStreak = 0;
        
        for(const num of numSet) {
            // Start sequence only if num is the starting point
            if(!numSet.has(num - 1)) {
                let currentNum = num;
                let currentStreak = 1;
                
                while(numSet.has(currentNum + 1)) {
                    currentNum += 1;
                    currentStreak += 1;
                }
                
                longestStreak = Math.max(longestStreak, currentStreak);
            }
        }
        return longestStreak;
    }
}