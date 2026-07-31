class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let frequencyMap = new Map();

        for(let num of nums) {
            if(frequencyMap.has(num)) {
                frequencyMap.set(num, frequencyMap.get(num) + 1);
            }
            else {
                frequencyMap.set(num, 1);
            }
        }

        const mapSort = new Map([...frequencyMap.entries()].sort((a,b) => b[1] - a[1]));
        
        return [...mapSort.keys()].slice(0,k)
    }
}
