class TrieNode {
    constructor() {
        this.children = {}
        this.word = null;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const root = new TrieNode();
        for(let word of words) {
            let node = root;
            for(let ch of word) {
                if(!node.children[ch]) {
                    node.children[ch] = new TrieNode();
                }
                node = node.children[ch];
            }
            node.word = word;
        }

        const ROWS = board.length;
        const COLS = board[0].length;
        let res = [];

        function dfs(r,c,node) {
            if( r < 0 || c < 0 
                || r >= ROWS || c >= COLS
                || board[r][c] === "#"
                || !node.children[board[r][c]]

            ) return;

            let ch = board[r][c];
            node = node.children[ch]

            if(node.word !== null) {
                res.push(node.word);
                node.word = null;
            }

            board[r][c] = "#";

            dfs(r + 1, c, node)
            dfs(r - 1, c, node) 
            dfs(r, c + 1, node)
            dfs(r, c - 1, node)

            board[r][c] = ch;
        }

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                dfs(r,c,root);
            }
        }
        
        return res;
    }
}
