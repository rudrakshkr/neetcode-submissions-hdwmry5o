class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    removeMax(heap) {
        const largest = heap[0];
        const last = heap.pop();

        if(heap.length > 0) {
            heap[0] = last;
            this.bubbleDown(heap);
        }
        
        return largest;
    }

    bubbleUp(heap) {
        let index = heap.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);

        // Bubble Up Max Heap
        while(index > 0 && (heap[index] > heap[parentIndex])) {
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

            let greaterChildIndex = left;

            if( right < heap.length && 
                heap[right] > heap[left]
            ) {
                greaterChildIndex = right;
            }

            // Parent is already greater than or equal to the greater child
            // so the max heap property is satisfied
            if(heap[index] >= heap[greaterChildIndex]) {
                break;
            }

            // Else swap
            [heap[index], heap[greaterChildIndex]] = [heap[greaterChildIndex], heap[index]];

            index = greaterChildIndex;
        }
    }


    lastStoneWeight(stones) {
        let heap = [];

        for(let i = 0; i < stones.length; i++) {
            heap.push(stones[i]);
            this.bubbleUp(heap);
        }

        while(heap.length > 1) {
            const largest = this.removeMax(heap);
            const secondLargest = this.removeMax(heap);

            if(largest !== secondLargest) {
                heap.push(largest - secondLargest);
                this.bubbleUp(heap);
            }
        }

        return heap.length === 0 ? 0 : heap[0];
    }
}
