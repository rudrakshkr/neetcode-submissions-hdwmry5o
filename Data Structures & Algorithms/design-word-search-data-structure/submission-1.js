class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.root;
        for(let char of word) {
            if(!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }

        node.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const dfs = (node, i) => {
            if(i === word.length) {
                return node.isEnd;
            }

            let char = word[i];

            if(char === ".") {
                // try all possible children
                for(let key in node.children) {
                    if(dfs(node.children[key], i + 1)) return true;
                }
                return false;
            } else {
                if(!node.children[char]) return false;
                return dfs(node.children[char], i + 1);
            }
        }

        return dfs(this.root, 0)
    }
}
