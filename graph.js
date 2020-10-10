/* eslint-disable guard-for-in, no-restricted-syntax */

'use strict';

const { PriorityQueue } = require('./lib/priority-queue');

// directed and weighted graph
class Graph {
  constructor () {
    this.adjacency = {};
  }

  /**
   * Add adjacency
   *
   * @param {string} path
   * @return {void}
   */
  addAdjacency (path) {
    const regex = new RegExp(/(\w{1})(\w{1})(\d+)/);
    const result = regex.exec(path);

    if (!result) throw new Error('the argument 1 of `AddAdjacency` accept a string in the form of `[alphanumeric]{2}[numeric]{n}');

    const [ _, vertex, neighbor, weight ] = result; // eslint-disable-line no-unused-vars

    if (!this.adjacency[vertex]) this.adjacency[vertex] = [];
    this.adjacency[vertex].push({ val: neighbor, weight: parseInt(weight, 10) });
  }

  /**
   * Get delivery cost from delivery path
   *
   * @param {array} path - array of given delivery path
   * @return {number | 'No Such Route'}
   */
  getDelivertCost (path) {
    if (!Array.isArray(path)) throw new Error('the argument 1 must be an array');

    let current = path.shift();
    let vertex = this.adjacency[current];
    let cost = 0;

    while (path.length) {
      const nextNode = path[0];

      for (const index in vertex) {
        const neighbor = vertex[index];

        if (neighbor.val === nextNode) {
          vertex = this.adjacency[nextNode];
          cost += neighbor.weight;
          current = path.shift();

          break;
        }
      }

      if (current !== nextNode) throw new Error('No Such Route');
    }

    return cost;
  }

  /**
   * Get cheapest path
   *
   * @param {string} start - start vertex
   * @param {string} end - end vertex
   * @return {number}
   */
  getCheapestPath (start, end) {
    if (!this.adjacency[start] || !this.adjacency[end]) throw new Error('the start or end vertex is not exist');

    const queue = new PriorityQueue();
    const distances = {};
    const previous = {};

    let smallest;

    // build up initial state
    for (const vertex in this.adjacency) {
      if (vertex === start) {
        distances[vertex] = 0;
        queue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        queue.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }

    while (queue.values.length) {
      smallest = queue.dequeue().val;

      if (smallest === end && distances[smallest] !== 0) break;

      // eslint-disable-next-line no-loop-func
      this.adjacency[smallest].forEach((neighbor) => {
        const candidate = distances[smallest] + neighbor.weight;

        if (candidate < distances[neighbor.val] || neighbor.val === end) {
          distances[neighbor.val] = candidate;
          previous[neighbor.val] = smallest;

          queue.enqueue(neighbor.val, candidate);
        }
      });
    }

    return distances[end];
  }
}

module.exports = { Graph };
