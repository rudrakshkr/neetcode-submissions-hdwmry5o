class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // list of prerequisites
        let preMap = Array.from({length: numCourses}, () => []);

        for(let [course, pre] of prerequisites) {
            preMap[course].push(pre);
        }

        const visitSet = new Set();

        function dfs(course) {
            // cycle detected
            if(visitSet.has(course)) return false;

            // no prerequisites -> safe
            if(preMap[course].length === 0) return true;

            visitSet.add(course);

            for(let pre of preMap[course]) {
                if(!dfs(pre)) return false;
            }

            visitSet.delete(course);

            // mark as complete
            preMap[course] = [];

            return true;
        }

        for(let i = 0; i < numCourses; i++) {
            if(!dfs(i)) return false;
        }

        return true;
    }
}
