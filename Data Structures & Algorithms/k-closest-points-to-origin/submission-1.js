class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */

    bubbleUp(heap) {
        let index = heap.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);

        const distance = ([x, y]) => x * x + y * y;

        // Bubble Up Max Heap
        while(index > 0 && distance(heap[index]) > distance(heap[parentIndex]) ) {
            [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    bubbleDown(heap) {
        let index = 0;
        
        const distance = ([x, y]) => x * x + y * y;

        while(true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            // No children
            if(left >= heap.length) {
                break;
            }

            let greaterChildIndex = left;

            if(right < heap.length && 
                distance(heap[right]) > distance(heap[left])
            ) {
                greaterChildIndex = right;
            }

            // Parent is already greater than or equal to the greater child
            // so the max heap property is satisfied
            if(distance(heap[index]) >= distance(heap[greaterChildIndex]) ) {
                break;
            }

            // Else swap
            [heap[index], heap[greaterChildIndex]] = [heap[greaterChildIndex], heap[index]];

            index = greaterChildIndex;
        }
    }

    kClosest(points, k) {
        let heap = [];

        for(let i = 0; i < points.length; i++) {
            heap.push(points[i]);
    
            this.bubbleUp(heap);

            if(heap.length > k) {
                // Remove the last element and store it
                const last = heap.pop();
                // Move last element to the top
                heap[0] = last;
                // Bubble down
                this.bubbleDown(heap);
            }
        }
        
        return heap;
    }
}
