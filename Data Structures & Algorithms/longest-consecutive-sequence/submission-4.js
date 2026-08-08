class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // let sortedArr = nums.sort((a,b) => a - b);
        // let count = new Set();
        // let longest = 0;

        // for(let i = 0; i < sortedArr.length; i++) {
        //     count.add(sortedArr[i])
        //     for(let j = i + 1; j < sortedArr.length; j++) {
        //         if(((sortedArr[j] - sortedArr[j - 1]) === 1)) count.add(sortedArr[j])
        //     }
        //     longest = Math.max(longest, count.size);
        //     count.clear();
        // }

        // return longest;


        let newSet = new Set(nums);
        let longestCount = 0;

        for(let num of newSet) {
            if(newSet.has(num - 1)) continue;
            let count = 1;

            while(newSet.has(num + 1)) {
                count++
                num++
            }

            longestCount = Math.max(longestCount, count);
        }

        return longestCount;
    }
}
