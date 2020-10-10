'use strict';

/**
 * --------------------------------------------------------------
 * This file is the implementation of case 1
 * --------------------------------------------------------------
 *
 * Calculate the delivery cost of the given delivery route.
 * Follow the route as given; do not count any extra stops.
 * In case given route is not exists, out put `No Such Route`.
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

// the normal case
console.log('the​ ​delivery​ ​cost​ ​for​ ​route​ ​A-B-E', g.getDelivertCost([ 'A', 'B', 'E' ]));
console.log('the​ ​delivery​ ​cost​ ​for​ ​route​ ​​ ​A-D', g.getDelivertCost([ 'A', 'D' ]));
console.log('the​ ​delivery​ ​cost​ ​for​ ​route​ ​​ ​E-A-C-F', g.getDelivertCost([ 'E', 'A', 'C', 'F' ]));

// The `No Such Route` case
// this below will throw an error with `No Such Route` message
console.log('the​ ​delivery​ ​cost​ ​for​ ​route​ ​A-D-F', g.getDelivertCost([ 'A', 'D', 'F' ]));
