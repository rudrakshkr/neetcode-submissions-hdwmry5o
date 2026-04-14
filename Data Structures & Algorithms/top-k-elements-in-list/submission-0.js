class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashMap =  {};
        let elements = [];
        
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] in hashMap) {
                hashMap[nums[i]]++
            }
            else {
                hashMap[nums[i]] = 0;
            }
        }
        
        const sortable = [];
        
        for(var num in hashMap) {
            sortable.push([num, hashMap[num]])
        }
        
        sortable.sort((a,b) => {
            return b[1] - a[1]
        })
        
        for(let j = 0; j < k; j++) {
            elements.push(+sortable[j][0])
        }
        
        return elements;
    }
}
