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
      queue.enqueue('some value', 5);
      queue.enqueue('some value', 3);
      queue.enqueue('some value', 1);

      // assert
      expect(queue.values).toBe([
        { val: 'some value', priority: 1 },
        { val: 'some value', priority: 5 },
        { val: 'some value', priority: 3 },
      ]);
    });
  });

  describe('dequeue', () => {});
});
