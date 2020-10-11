# Graph

## Table of Content
1. [Features](#features)
2. [Installation](#install)
3. [Basic usage](#basic-usage)
4. [Example](#example)
5. [API](#api)
    - [Get delivery cost](#api.get-delivery-cost)
    - [Get possible delivery route number](#api.get-possible-delivery-route-number)
    - [Get cheapest delivery cose](#api.get-cheapest-delivery-cos)
6. [Tests](#tests)
7. [License](#license)

## Features
- Make on the [weighted graph](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)#Weighted_graph) and the [directed graph](https://en.wikipedia.org/wiki/Directed_graph) concept.
- Calculate the cost from given path
- Calculate the cheapest cost from the point to the another point

## Installation <a name="install"></a>
Using [NPM](https://www.npmjs.com/package/eko-graph) or [YARN](https://yarnpkg.com/package/eko-graph)

```bash
# NPM
$ npm install eko-graph --save

# YARN
$ yarn add eko-graph
```

## Basic usage <a name="basic-usage"></a>

```js
'use strict';

const { Graph } = require('eko-graph');

const graph = new Graph();

// to add vertex and its neighbor and weight on the edge
graph.addAdjacency('AB1');
graph.addAdjacency('AC4');

console.log(graph.adjacency);
// { A: [{ val: 'B', weight: 1 }, { val: 'C', weight: 4 }] }
```

## Example <a name="example"></a>

To view the example, clone this repo and install dependencies

```bash
$ git clone git@github.com:JPooban/eko-graph.git

$ cd eko-graph

$ npm install
```

Then run the example

```bash
$ node ./example/get-delivery-cost.js
```

## API <a name="api"></a>

### Get delivery cost <a name="api.get-delivery-cost"></a>
Calculate the cost from given route.

```js
// graph.getDelivertCost(route);

const cost = graph.getDelivertCost([ 'A', 'B', 'E' ]); // -> 4
```

> In the case of non existing route, it will throw an error with `No Such Route` message.

### Get possible delivery route number <a name="api.get-possible-delivery-route-number"></a>

Calculate​ ​the​ ​number​ ​of​ ​possible​ ​delivery​ ​route​ ​that​ ​can​ ​be​ ​construct​ ​by​ ​the​ ​given conditions.

```js
// graph.getPossibleDeliveryRoute(start, end, options);

const possibleNumber = graph.getPossibleDeliveryRoute('E', 'D', { maxStop: 4 }); // -> 4
```

#### Properties
|  Property  |   Default   | Description |
|------------|-------------|-------------|
| `maxStop`  | `undefined` | The maximum stop of each path. (count the path which is length is less than or equal `maxStop + 1`) |

### Get cheapest delivery cost <a name="api.get-cheapest-delivery-cost"></a>

Calculate​ ​the​ ​cheapest​ ​delivery​ ​route​ ​between​ ​two​ vertex.

```js
// graph.getCheapestCost(start, end);

const cheapestCost = graph.getCheapestCost('E', 'D'); // -> 9
```


## Tests <a name="tests"></a>

To run unit test suite, must install the dependencies. Use [Jest](https://jestjs.io/en/) as the test framework.

```bash
# install dependencies
$ npm install

# run the unit test
$ npm run test
```

## License <a name="license"></a>
[MIT](https://github.com/JPooban/eko-graph/blob/main/LICENSE)

