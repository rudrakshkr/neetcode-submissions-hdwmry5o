class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = [];
        let current = [];
        let used = Array(nums.length).fill(false);

        function backtrack(index) {
            if(index === nums.length) {
                result.push([...current]);
                return;
            }

            for(let i = 0; i < nums.length; i++) {
                if (used[i]) continue;

                // Push the unused nums[i] 
                // Mark it as used afterwards
                current.push(nums[i]);
                used[i] = true;

                backtrack(index + 1);

                // Undo the choice 
                // And mark it as unused
                current.pop();
                used[i] = false;
            }
        }

        backtrack(0);

        return result;
    }
}
