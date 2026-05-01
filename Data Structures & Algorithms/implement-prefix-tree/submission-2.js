class PrefixTree {
    constructor() {
        this.tree = [];
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        this.tree.push(word);
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        if(this.tree.includes(word)) return true;
        return false;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        for(let word of this.tree) {
            if(word.startsWith(prefix)) return true;
        }
        return false;
    }
}
