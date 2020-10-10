'use strict';

// Priority queue using binary heap
class PriorityQueue {
  constructor () {
    this.values = [];
  }

  /**
   * Enqueue
   *
   * @param {any} val - the queue value
   * @param {number} priority - priority of the queue
   * @return {void}
   */
  enqueue (val, priority) {
    if (typeof priority !== 'number') throw new Error('priority must be a number');

    this.values.push({ val, priority });
    this.bubbleUp();
  }

  /**
   * Bubble up
   *
   * @private
   * @description move the last queue (last index) up to the right place
   * @return {void}
   */
  bubbleUp () {
    let index = this.values.length - 1;
    const value = this.values[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.values[parentIndex];

      if (value.priority >= parent.priority) break;

      this.values[parentIndex] = value;
      this.values[index] = parent;

      index = parentIndex;
    }
  }

  dequeue () {
    const min = this.values[0];
    const last = this.values.pop();

    if (this.values.length) {
      this.values[0] = last;
      this.sinkDown();
    }

    return min;
  }

  /**
   * Sink down
   *
   * @private
   * @description move the first index down to the right place
   * @return {void}
   */
  sinkDown () {
    let index = 0;

    const { length } = this.values;
    const value = this.values[0];

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const leftChildIndex = (2 * index) + 1;
      const rightChildIndex = (2 * index) + 2;

      let leftChild;
      let rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];

        if (leftChild.priority < value.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];

        if (
          (swap === null && rightChild.priority < value.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.values[index] = this.values[swap];
      this.values[swap] = value;

      index = swap;
    }
  }
}

module.exports = { PriorityQueue };
