class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.stack.length === 0) {
            this.stack.push(
                {
                    val: val,
                    min: val
                }
            );
        }
        else {
            let getMin = this.stack.at(-1).min;

            let newMin = Math.min(getMin, val);

            this.stack.push({
                val: val,
                min: newMin
            })
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        let l = this.stack.length;
        return this.stack[l - 1].val;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack.at(-1).min;
    }
}
