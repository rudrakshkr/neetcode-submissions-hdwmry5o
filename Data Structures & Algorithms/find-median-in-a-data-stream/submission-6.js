class MedianFinder {
    constructor() {
        this.arr = [];
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.arr.push(num);
    }

    /**
     * @return {number}
     */
    findMedian() {
        this.arr.sort((a,b) => a - b);
        if(this.arr.length % 2 === 0) {
            let middle = this.arr.length / 2;
            let firstMid = this.arr[middle]
            let secondMid = this.arr[middle - 1];

            const median = (firstMid + secondMid) / 2
            return median.toFixed(1);
        }
        else {
            let mid = (this.arr.length - 1) / 2
            return this.arr[mid].toFixed(1);
        }
    }
}
