class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const seen = new Set();

        // Checking each row
        for(let row = 0; row < 9; row++) {
            for(let col = 0; col < 9; col++) {
                if(board[row][col] === ".") continue;

                if(seen.has(board[row][col])) {
                    return false;
                }

                seen.add(board[row][col]);
            }
            seen.clear();
        };

        // Checking each column
        for(let col = 0; col < 9; col++) {
            for(let row = 0; row < 9; row++) {
                if(board[row][col] === ".") continue;

                if(seen.has(board[row][col])) {
                    return false;
                }

                seen.add(board[row][col]);
            }
            seen.clear();
        }
        // Checking each 3x3 grid
        for(let startRow = 0; startRow < 9; startRow += 3) {
            for(let startCol = 0; startCol < 9; startCol += 3) {
                for(let row = startRow; row < startRow + 3; row++) {
                    for(let col = startCol; col < startCol + 3; col++) {
                        if(board[row][col] === ".") continue;

                        if(seen.has(board[row][col])) {
                            return false;
                        }

                        seen.add(board[row][col]);
                    }
                }
                seen.clear();
            }
        }
        
        return true;
    };
}
