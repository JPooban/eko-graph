'use strict';

const { Graph } = require('../graph');

describe('graph', () => {
  describe('constructor', () => {
    it('should create instance with empty adjacency list', () => {
      // arrange
      const graph = new Graph();

      // assert
      expect(typeof graph.adjacency).toBe('object');
      expect(graph.adjacency).toStrictEqual({});
    });
  });

  describe('addAdjacency', () => {
    it('should throw an error if the weight is not a numeric', () => {
      // arrange
      const graph = new Graph();

      // act and assert
      expect(() => graph.addAdjacency('ABC')).toThrowError('the argument 1 of `AddAdjacency` accept a string in the form of `[alphanumeric]{2}[numeric]{n}');
    });

    it('should add vertex with its neighbor and weight', () => {
      // arrange
      const graph = new Graph();

      // act
      graph.addAdjacency('AB1');
      graph.addAdjacency('AC4');
      graph.addAdjacency('AD10');
      graph.addAdjacency('​BE3');

      // assert
      expect(graph.adjacency).toStrictEqual({
        A: [{ val: 'B', weight: 1 }, { val: 'C', weight: 4 }, { val: 'D', weight: 10 }],
        B: [{ val: 'E', weight: 3 }],
      });
    });
  });
});
