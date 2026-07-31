class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let frequencyMap = new Map();
        let result = [];

        for(let num of nums) {
            frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        }

        const bucket = Array.from({length: nums.length + 1}, () => []);

        frequencyMap.forEach((frequency, number) => {
            bucket[frequency].push(number)
        });

        for(let i = bucket.length - 1; i >= 0; i--) {
            for(let num of bucket[i]) {
                result.push(num);
                if(result.length === k) {
                    return result;
                }
            }
        }

        // const mapSort = new Map([...frequencyMap.entries()].sort((a,b) => b[1] - a[1]));
        
        // return [...mapSort.keys()].slice(0,k)
    }
}
