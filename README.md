Cosine Similarity
===
[![NPM version][npm-image]][npm-url] [![Coverage Status][coveralls-image]][coveralls-url]

> Computes the [cosine similarity](http://en.wikipedia.org/wiki/Cosine_similarity) between two arrays.

[Cosine similarity](http://en.wikipedia.org/wiki/Cosine_similarity) defines vector similarity in terms of the angle separating two vectors.

<div class="equation" align="center" data-raw-text="s(\mathbf{x},\mathbf{y}) = {\mathbf{x} \cdot \mathbf{y} \over \|\mathbf{x}\| \|\mathbf{y}\|} = \frac{ \sum\limits_{i=0}^{n-1}{x_i y_i} }{ \sqrt{\sum\limits_{i=0}^{n-1}{(x_i)^2}} \times \sqrt{\sum\limits_{i=0}^{n-1}{(y_i)^2}} }" data-equation="eq:cosine_similarity">
	<img src="https://cdn.rawgit.com/compute-io/cosine-similarity/bdef940bf4e6d320d2652b52f54f58cf2ea5d794/docs/img/eqn_similarity.svg" alt="Cosine similarity formula">
	<br>
</div>


## Installation

``` bash
$ npm install compute-cosine-similarity
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var similarity = require( 'compute-cosine-similarity' );
```

#### similarity( x, y[, accessor] )

Computes the [cosine similarity](http://en.wikipedia.org/wiki/Cosine_similarity) between two `arrays`.


``` javascript
var x = [ 5, 23, 2, 5, 9 ],
    y = [ 3, 21, 2, 5, 14 ];

var s = similarity( x, y );
// returns ~0.975
```

For object `arrays`, provide an accessor `function` for accessing `numeric` values.

``` javascript
var x = [
	{'x':2},
	{'x':4},
	{'x':5}
];

var y = [
	[1,3],
	[2,1],
	[3,5]
];

function getValue( d, i, j ) {
	if ( j === 0 ) {
		return d.x;
	}
	return d[ 1 ];
}

var s = similarity( x, y, getValue );
// returns ~0.882
```

The accessor `function` is provided three arguments:

-	__d__: current datum.
-	__i__: current datum index.
-	__j__: array index; e.g., array `x` has index `0`, and array `y` has index `1`.


If provided empty `arrays`, the function returns `null`.



## Examples

``` javascript
var similarity = require( 'compute-cosine-similarity' );

var x = new Array( 100 ),
	y = new Array( 100 ),
	s;

for ( var i = 0; i < x.length; i++ ) {
	x[ i ] = Math.round( Math.random()*100 );
	y[ i ] = Math.round( Math.random()*100 );
}
s = similarity( x, y );

console.log( s );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. The Compute.io Authors. All rights reserved.


[npm-image]: http://img.shields.io/npm/v/compute-cosine-similarity.svg
[npm-url]: https://npmjs.org/package/compute-cosine-similarity

[coveralls-image]: https://img.shields.io/coveralls/compute-io/cosine-similarity/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/cosine-similarity?branch=master

[github-issues-image]: http://img.shields.io/github/issues/compute-io/cosine-similarity.svg
[github-issues-url]: https://github.com/compute-io/cosine-similarity/issues
