'use strict';

const { PriorityQueue } = require('../../lib/priority-queue');

describe('priority queue', () => {
  describe('constructor', () => {
    it('create instance with empty array of values', () => {
      const queue = new PriorityQueue();

      expect(Array.isArray(queue.values)).toBe(true);
    });
  });

  describe('enqueue', () => {});

  describe('dequeue', () => {});
});
