'use strict';

/**
 * --------------------------------------------------------------
 * This file is the implementation of case 3
 * --------------------------------------------------------------
 *
 * Calculate the cheapest delivery route between two town.
 */

const { Graph } = require('../graph');

const g = new Graph();

g.addAdjacency('AB1');
g.addAdjacency('AC4');
g.addAdjacency('AD10');
g.addAdjacency('BE3');
g.addAdjacency('CD4');
g.addAdjacency('CF2');
g.addAdjacency('DE1');
g.addAdjacency('EB3');
g.addAdjacency('EA2');
g.addAdjacency('FD1');

console.log('The​ ​cost​ ​of​ ​cheapest​ ​delivery​ ​route​ ​between​ ​E​ ​to​ ​D', g.getCheapestDeliveryCost('E', 'D'));
console.log('The​ ​cost​ ​of​ ​cheapest​ ​delivery​ ​route​ ​between​ ​E​ ​to​ ​E', g.getCheapestDeliveryCost('E', 'E'));
