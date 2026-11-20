class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const result = [];
        let current = [];

        candidates.sort((a,b) => a - b);

        function backtrack(start, remaining) {
            if(remaining === 0) {
                result.push([...current]);
                return;
            }

            if(remaining < 0) return;

            const seen = new Set();

            for(let i = start; i < candidates.length; i++) {
                if(seen.has(candidates[i])) continue;

                current.push(candidates[i]);
                seen.add(candidates[i]);

                backtrack(i + 1, remaining - candidates[i]);

                current.pop();
            }
        }

        backtrack(0, target);

        return result;
    }
}
