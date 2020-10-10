a# Graph

## Table of Content
1. [Features](#features)
2. [Installation](#install)
3. [Basic usage](#basic-usage)
4. [Example](#example)
5. [API](#api)
    - [Get delivery cost](#api.get-delivery-cost)
    - [Get cheapest delivery cose](#api.get-cheapest-delivery-cos)
6. [Tests](#tests)
7. [License](#license)

## Features
- Make on the [weighted graph](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)#Weighted_graph) and the [directed graph](https://en.wikipedia.org/wiki/Directed_graph) concept.
- Calculate the cost from given path
- Calculate the cheapest cost from the point to the another point

## Installation <a href="install"></a>
Using [NPM](https://www.npmjs.com/package/eko-graph) or [YARN](https://yarnpkg.com/package/eko-graph)

```bash
# NPM
$ npm install eko-graph --save

# YARN
$ yarn add eko-graph
```

## Basic usage <a href="basic-usage"></a>

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

## Example <a href="example"></a>

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

## API <a href="api"></a>

### Get delivery cost <a href="api.get-delivery-cost"></a>
### Get cheapest delivery cost <a href="api.get-cheapest-delivery-cost"></a>

## Tests <a href="tests"></a>

To run unit test suite, must install the dependencies. Use [Jest](https://jestjs.io/en/) as the test framework.

```bash
# install dependencies
$ npm install

# run the unit test
$ npm run test
```

## License
[MIT](https://github.com/JPooban/eko-graph/blob/main/LICENSE)

