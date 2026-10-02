class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
        this.word = null;
    }
}

class Solution {
    constructor() {
        this.root = new TrieNode();
    }
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    insert(word) {
        let node = this.root;

        for(let char of word) {
            if(!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }

        node.isEnd = true;
        node.word = word;
    }

    findWords(board, words) {
        for(let word of words) {
            this.insert(word);
        }

        let ROWS = board.length;
        let COLS = board[0].length;
        let res = [];

        function dfs(r, c, node) {
            if(
                r < 0 || c < 0
                || r >= ROWS || c >= COLS
                || board[r][c] === "#"
                || !node.children.has(board[r][c])
            ) return;

            let char = board[r][c];
            node = node.children.get(char);

            if(node.word !== null) {
                res.push(node.word);
                node.word = null;
            }

            board[r][c] = "#";

            dfs(r + 1, c, node);
            dfs(r - 1, c, node);
            dfs(r, c + 1, node);
            dfs(r, c - 1, node);

            board[r][c] = char;
        }

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                dfs(r, c, this.root);
            }
        }

        return res;
    }
}
