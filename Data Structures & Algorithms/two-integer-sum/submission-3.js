class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // twoSum(nums, target) {
    //     for(let i = 0; i < nums.length; i++) {
    //         for(let j = 0; j < nums.length; j++) {
    //             if(nums[i] + nums[j] === target && i !== j) {
    //                 return [i,j];
    //             }
    //         }
    //     }
    // }

    twoSum(nums, target) {
        const hashTable = {};

        for(let i = 0; i < nums.length; i++) {
            let num = nums[i];
            let rem = target - num;

            if(!(rem in hashTable)) {
                hashTable[num] = i
                continue;
            }
            return [i, hashTable[rem]];
        }
    }
}
