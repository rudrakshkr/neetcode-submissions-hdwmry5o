class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */

    bubbleUp(heap) {
        let index = heap.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);

        // Bubble Up Min Heap
        while(index > 0 && heap[index] < heap[parentIndex]) {
            // Swap and change indexes
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

            // If the index is less than the smallerChildIndex, we dont need to bubble down any longer, it's sorted
            if(heap[index] <= heap[smallerChildIndex]) {
                break;
            }

            // Else Swap
            [heap[index], heap[smallerChildIndex]] = [heap[smallerChildIndex], heap[index]];

            index = smallerChildIndex;
        }
    }

    findKthLargest(nums, k) {
        let heap = [];

        for(let i = 0; i < nums.length; i++) {
            heap.push(nums[i]);

            this.bubbleUp(heap);

            if(heap.length > k) {
                // Remove the top smallest element
                heap.shift();
                // Move last element to the top
                heap.unshift(heap.pop());
                // Bubble down
                this.bubbleDown(heap);
            }
        }

        return heap[0];
    }
}
