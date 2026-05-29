class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let result = [];
        let i = 0;
        let n = intervals.length;

        // PHASE-1: Strictly before 
        // Skip and add all intervals that end before the new interval starts
        while(i < n && intervals[i][1] < newInterval[0]) {
            result.push(intervals[i]);
            i += 1;
        }

        // PHASE-2: Merge Zone
        // Intervals that overlap with our new interval 
        while(i < n && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            i += 1
        }

        // Finally push the merged interval to our result array
        result.push(newInterval);

        // PHASE-3: Stricly after
        // Add whatever is left in the array
        while(i < n) {
            result.push(intervals[i])
            i += 1;
        }

        return result;
    }
}
