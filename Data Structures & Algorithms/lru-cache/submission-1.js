class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        
        // LRU
        this.left = new Node(0, 0);
        // MRU
        this.right = new Node(0, 0);

        this.left.next = this.right;
        this.right.prev = this.left;
    }

    moveToMRU(node) {
        let prev = this.right.prev;

        prev.next = node;
        node.prev = prev;
        node.next = this.right;
        this.right.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.map.has(key)) {
            return -1;
        }
        // If key exists, remove from current position and push it to the end of the doubly linked list
        const node = this.map.get(key);

        // Remove the node from doubly linked list
        node.prev.next = node.next;
        node.next.prev = node.prev;

        // Add our node before right
        this.moveToMRU(node);
        
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // 1st case: If the key already exists
        if(this.map.has(key)) {
            const node = this.map.get(key);

            node.value = value;

            // remove from current position
            node.prev.next = node.next;
            node.next.prev = node.prev;

            // move to MRU position
            this.moveToMRU(node);
        }
        
        // 2nd case: Key exists but size of map is less than the capacity
        else if(this.map.size < this.capacity) {
            const node = new Node(key, value);
            
            // Move to MRU position
            this.moveToMRU(node);
            this.map.set(key, node);
        }
        else {
            // 3d case: Key exists but size of map is more than the capacity

            // Remove the lru from linked list
            const lru = this.left.next;
            lru.prev.next = lru.next;
            lru.next.prev = lru.prev;

            // remove the key from map
            this.map.delete(lru.key);

            // Move to MRU position
            const node = new Node(key, value);
            this.moveToMRU(node);
            this.map.set(key, node);
        }
    }
}
