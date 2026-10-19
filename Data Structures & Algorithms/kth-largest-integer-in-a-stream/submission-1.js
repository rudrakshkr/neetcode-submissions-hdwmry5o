class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.heap = [];

        for(let num of nums) {
            this.add(num);
        }
    }

    bubbleUp(heap) {
        let index = heap.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);

        // Bubble Up Min Heap 
        while(index > 0 && heap[index] < heap[parentIndex]) {
            [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    bubbleDown(heap) {
        let index = 0;

        while(true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            // No children
            if(left >= heap.length) {
                break;
            }

            let smallerChildIndex = left;

            if( right < heap.length &&
                heap[right] < heap[left]
            ) {
                smallerChildIndex = right;
            }

            // Parent is already smaller than or equal to the smaller child
            // so the min heap property is satisfied
            if(heap[index] <= heap[smallerChildIndex]) {
                break;
            }

            // Else Swap
            [heap[index], heap[smallerChildIndex]] = [heap[smallerChildIndex], heap[index]];

            index = smallerChildIndex;
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        const heap = this.heap;

        heap.push(val);
        this.bubbleUp(heap);

        if(heap.length > this.k) {
            // Remove the last element and store it
            const last = heap.pop();
            // Move last element to the top
            heap[0] = last;
            // Bubble Down
            this.bubbleDown(heap);
        }

        return heap[0];
    }
}
