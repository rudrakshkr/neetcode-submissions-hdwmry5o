class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        let result = [];
        let i = 1;
        let n = intervals.length;

        // Sort the intervals array
        intervals.sort((a, b) => a[0] - b[0])

        // Add the first interval to the result 
        result.push(intervals[0]);

        while(i < n) {
            let lastIndex = result.length - 1;
            // If they overlap update end value of the last appended interval to the max of both intervals
            if(intervals[i][0] <= result[lastIndex][1]) {
                result[lastIndex][1] = Math.max(result[lastIndex][1], intervals[i][1]);
            }
            else {
                // Else just push it inside our result
                result.push(intervals[i]);
            }
            i++
        }

        return result;
    }
}
