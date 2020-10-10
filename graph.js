'use strict';

class Graph {
  constructor () {
    this.adjacency = {};
  }

  /**
   * Add adjacency
   *
   * @param {string} route
   * @return {void}
   */
  addAdjacency (route) {
    const regex = new RegExp(/(\w{1})(\w{1})(\d+)/g);
    const result = regex.exec(route);

    if (!result) throw new Error('the argument 1 of `AddAdjacency` accept a string in the form of `[alphanumeric]{2}[numeric]{n}');

    const [ _, vertex, neighbor, weight ] = result; // eslint-disable-line no-unused-vars

    if (!this.adjacency[vertex]) this.adjacency[vertex] = [];
    this.adjacency[vertex].push({ val: neighbor, weight: parseInt(weight, 10) });
  }
}

module.exports = { Graph };
