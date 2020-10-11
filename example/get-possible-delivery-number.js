'use strict';

/**
 * --------------------------------------------------------------
 * This file is the implementation of case 2
 * --------------------------------------------------------------
 *
 * Calculate the number of possible delivery route that can be
 * con construct by the given conditions. (Do not cound the route
 * that has 0 cost)
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

console.log('The​ ​number​ ​of​ ​possible​ ​delivery​ ​route​ ​from​ ​E​ ​to​ ​D​ ​with​ ​a​ ​maximum​ ​of​ ​4​ ​stop', g.getPossibleDeliveryRouteNumber('E', 'D', { maxStop: 4 }));
console.log('The​ ​number​ ​of​ ​possible​ ​delivery​ ​route​ ​from​ ​E​ ​to​ ​E​', g.getPossibleDeliveryRouteNumber('E', 'E'));
