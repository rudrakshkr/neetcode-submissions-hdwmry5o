class MedianFinder {
    constructor() {
        this.maxHeap = [];
        this.minHeap = [];
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */

    bubbleUp(heap, type) {
        let index = heap.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);

        // Bubble Up Max Heap 
        while(  
            index > 0 &&
            (type === "max"
                ? heap[index] > heap[parentIndex]
                : heap[index] < heap[parentIndex]
            )
        ) {
            [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    bubbleDown(heap, type) {
        let index = 0;

        const hasHigherPriority = (a, b) =>
            type === "max" ? a > b : a < b;

        while(true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            // No children
            if(left >= heap.length) {
                break;
            }

            let priorityChildIndex = left;

            if (
                right < heap.length &&
                hasHigherPriority(heap[right], heap[left])
            ) {
                priorityChildIndex = right;
            }

            // Parent already satisfies the heap property
            if (!hasHigherPriority(heap[priorityChildIndex], heap[index])) {
                break;
            }

            // Swap
            [heap[index], heap[priorityChildIndex]] =
                [heap[priorityChildIndex], heap[index]];

            index = priorityChildIndex;
        }
    }

    removeRoot(heap, type) {
        const root = heap[0];
        const last = heap.pop();
        
        if(heap.length > 0) {
            heap[0] = last;
            this.bubbleDown(heap, type);
        }

        return root;
    }

    addNum(num) {
        if( 
            this.maxHeap.length === 0 || 
            this.maxHeap[0] >= num
        ) {
            this.maxHeap.push(num);
            this.bubbleUp(this.maxHeap, "max");
            
            if(this.maxHeap.length > this.minHeap.length + 1) {
                const root = this.removeRoot(this.maxHeap, "max");
                this.minHeap.push(root);
                this.bubbleUp(this.minHeap, "min");
            }
        }
        else {
            this.minHeap.push(num);
            this.bubbleUp(this.minHeap, "min");

            if(this.minHeap.length > this.maxHeap.length) {
                const root = this.removeRoot(this.minHeap, "min");
                this.maxHeap.push(root);
                this.bubbleUp(this.maxHeap, "max");

            }
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        let median = 0;

        if(this.minHeap.length === this.maxHeap.length) {
            median = ( this.maxHeap[0] + this.minHeap[0] ) / 2;
        }
        else {
            median = this.maxHeap[0]
        }

        return median;
    }
}
