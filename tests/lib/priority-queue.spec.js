'use strict';

const sinon = require('sinon');

const { PriorityQueue } = require('../../lib/priority-queue');

describe('priority queue', () => {
  /** @type {import('sinon').SinonSandbox} */
  let sandbox;

  beforeAll(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('constructor', () => {
    it('create instance with empty array of values', () => {
      // arrange
      const queue = new PriorityQueue();

      // assert
      expect(Array.isArray(queue.values)).toBe(true);
    });
  });

  describe('enqueue', () => {
    it('should throw an error if priority is not a number', () => {
      // arrange
      const queue = new PriorityQueue();

      // assert
      expect(() => queue.enqueue('some value', '1')).toThrowError('priority must be a number');
    });

    it('bubble up should called', () => {
      // arrange
      const queue = new PriorityQueue();
      const bubbleUpStub = sandbox.stub(queue, 'bubbleUp');

      // act
      queue.enqueue('some value', 1);

      // assert
      expect(bubbleUpStub.called).toBe(true);
    });

    it('should place the queue in the right position', () => {
      // arrange
      const queue = new PriorityQueue();

      // act
      queue.enqueue('value with priority 5', 5);
      queue.enqueue('value with priority 1', 1);
      queue.enqueue('value with priority 3', 3);
      queue.enqueue('another value with priority 1', 1);

      // assert
      expect(queue.values).toStrictEqual([
        { val: 'value with priority 1', priority: 1 },
        { val: 'another value with priority 1', priority: 1 },
        { val: 'value with priority 3', priority: 3 },
        { val: 'value with priority 5', priority: 5 },
      ]);
    });
  });

  describe('dequeue', () => {});
});
