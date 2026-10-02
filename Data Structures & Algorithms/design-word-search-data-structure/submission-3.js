class TrieNode {
    constructor() {
        this.children = new Map();
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
            if(!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
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
                return node.isEnd
            }

            let char = word[i];

            if(char === ".") {
                // Recursively go through every children
                for(let child of node.children.values()) {
                    if(dfs(child, i + 1)) {
                        return true;
                    }
                }
                
                return false;
            } else {
                if(!node.children.has(char)) return false;
                return dfs(node.children.get(char), i + 1);
            }
        }

        return dfs(this.root, 0);
    }
}
