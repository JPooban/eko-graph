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

  describe('getDeliveryCost', () => {
    it('should throw an error if the first argument is not an array', () => {
      // arrange
      const graph = new Graph();

      // act and assert
      expect(() => graph.getDelivertCost('a', 'b', 'e')).toThrowError('the argument 1 must be an array');
    });

    it('should return the cost as the number if the given path is exist', () => {
      // arrange
      const graph = new Graph();

      graph.addAdjacency('AB1');
      graph.addAdjacency('AD10');
      graph.addAdjacency('​BE3');

      // act
      const firstPath = graph.getDelivertCost([ 'A', 'B', 'E' ]);
      const secondPath = graph.getDelivertCost([ 'A', 'D' ]);

      // assert
      expect(firstPath).toBe(4);
      expect(secondPath).toBe(10);
    });

    it('should throw an error with `No Such Route` message if the given path is not exist', () => {
      // arrange
      const graph = new Graph();

      graph.addAdjacency('AB1');
      graph.addAdjacency('AC4');
      graph.addAdjacency('​BE3');

      // act
      const firstRoute = () => graph.getDelivertCost([ 'A', 'B', 'A' ]);
      const secondRoute = () => graph.getDelivertCost([ 'a', 'b', 'e' ]);

      // assert
      expect(firstRoute).toThrowError('No Such Route');
      expect(secondRoute).toThrowError('No Such Route');
    });
  });

  describe('getPossibleDeliveryRouteNumber', () => {
    it('should throw aan error if start and end vertex is not exist in adjacency list', () => {
      // arrange
      const graph = new Graph();

      graph.addAdjacency('AB1');

      // act and assert
      expect(() => graph.getPossibleDeliveryRouteNumber('W', 'A')).toThrowError('the start or end vertex is not exist');
      expect(() => graph.getPossibleDeliveryRouteNumber('A', 'W')).toThrowError('the start or end vertex is not exist');
    });

    it('should return the possible number of delivery route', () => {
      // arrange
      const graph = new Graph();

      graph.addAdjacency('AB1');
      graph.addAdjacency('AC4');
      graph.addAdjacency('AD10');
      graph.addAdjacency('BE3');
      graph.addAdjacency('CD4');
      graph.addAdjacency('CF2');
      graph.addAdjacency('DE1');
      graph.addAdjacency('EB3');
      graph.addAdjacency('EA2');
      graph.addAdjacency('FD1');

      // act
      const possibleNumber = graph.getPossibleDeliveryRouteNumber('E', 'D');

      // assert
      expect(possibleNumber).toBe(6);
    });

    it('should return the possible number of delivery route which is less than 4 stop', () => {
      // arrange
      const graph = new Graph();

      graph.addAdjacency('AB1');
      graph.addAdjacency('AC4');
      graph.addAdjacency('AD10');
      graph.addAdjacency('BE3');
      graph.addAdjacency('CD4');
      graph.addAdjacency('CF2');
      graph.addAdjacency('DE1');
      graph.addAdjacency('EB3');
      graph.addAdjacency('EA2');
      graph.addAdjacency('FD1');

      // act
      const possibleNumber = graph.getPossibleDeliveryRouteNumber('E', 'D', { maxStop: 4 });

      // assert
      expect(possibleNumber).toBe(4);
    });

    it('should not count the route that has 0 cost', () => {
      // arrange
      const graph = new Graph();

      graph.addAdjacency('AB1');
      graph.addAdjacency('AC4');
      graph.addAdjacency('AD10');
      graph.addAdjacency('BE3');
      graph.addAdjacency('CD4');
      graph.addAdjacency('CF2');
      graph.addAdjacency('DE1');
      graph.addAdjacency('EB3');
      graph.addAdjacency('EA2');
      graph.addAdjacency('FD1');

      // act
      const possibleNumber = graph.getPossibleDeliveryRouteNumber('E', 'E');

      // assert
      expect(possibleNumber).toBe(5);
    });
  });

  describe('getCheapestDeliveryCost', () => {
    it('should throw an error if start or end vertex is not exist in adjacency list', () => {
      // arrage
      const graph = new Graph();

      graph.addAdjacency('AB1');

      // act and assert
      expect(() => graph.getCheapestDeliveryCost('W', 'A')).toThrowError('the start or end vertex is not exist');
      expect(() => graph.getCheapestDeliveryCost('A', 'W')).toThrowError('the start or end vertex is not exist');
    });

    it('should return the cheapest delivery cost based on start and end vertex', () => {
      // arrage
      const graph = new Graph();

      graph.addAdjacency('AB1');
      graph.addAdjacency('AC4');
      graph.addAdjacency('AD10');
      graph.addAdjacency('BE3');
      graph.addAdjacency('CD4');
      graph.addAdjacency('CF2');
      graph.addAdjacency('DE1');
      graph.addAdjacency('EB3');
      graph.addAdjacency('EA2');
      graph.addAdjacency('FD1');

      // act
      const firstPath = graph.getCheapestDeliveryCost('E', 'D');
      const secondPath = graph.getCheapestDeliveryCost('E', 'E');

      // assert
      expect(firstPath).toBe(9);
      expect(secondPath).toBe(6);
    });
  });
});
