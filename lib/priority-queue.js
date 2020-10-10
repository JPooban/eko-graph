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
   * @description bubble up the last queue (last index) to the right place
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
}

module.exports = { PriorityQueue };
