class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let row = matrix.length;
        let col = matrix[0].length;

        let l = 0;
        let r = (row * col) - 1;

        while(l <= r) {
            let mid = Math.floor((l + r) / 2);

            const midRow = Math.floor(mid / col);
            const midCol = mid % col;

            let val = matrix[midRow][midCol];

            if(val === target) {
                return true;
            }
            else if(val < target) {
                l = mid + 1;
            }
            else {
                r = mid - 1;
            }
        }

        return false;
    }
}
