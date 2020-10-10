'use strict';

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

    /* eslint-disable guard-for-in, no-trailing-spaces, no-restricted-syntax */
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
      /* eslint-enable guard-for-in, no-trailing-spaces, no-restricted-syntax */

      if (current !== nextNode) return 'No Such Route';
    }

    return cost;
  }
}

module.exports = { Graph };
