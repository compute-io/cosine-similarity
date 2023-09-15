'use strict';

// MODULES //

var dot = require( 'compute-dot' ),
	l2norm = require( 'compute-l2norm' ),
	isArray = require( 'validate.io-array' ),
	isFunction = require( 'validate.io-function' );


// FUNCTIONS //

/**
* Partially applied function from the right.
*
* @private
* @param {Function} fn - input function
* @param {number} j - array index
* @returns {Function} partially applied function
*/
function partial( fn, j ) {
	return function accessor( d, i ) {
		return fn( d, i, j );
	};
}


// MAIN //

/**
* Computes the cosine similarity between two arrays.
*
* @param {number[]|Array} x - input array
* @param {number[]|Array} y - input array
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {number|null} cosine similarity or null
*/
function similarity( x, y, clbk ) {
	var a, b, c;
	if ( !isArray( x ) ) {
		throw new TypeError( 'cosine-similarity()::invalid input argument. First argument must be an array. Value: `' + x + '`.' );
	}
	if ( !isArray( y ) ) {
		throw new TypeError( 'cosine-similarity()::invalid input argument. Second argument must be an array. Value: `' + y + '`.' );
	}
	if ( arguments.length > 2 ) {
		if ( !isFunction( clbk ) ) {
			throw new TypeError( 'cosine-similarity()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
		}
	}
	if ( x.length !== y.length ) {
		throw new Error( 'cosine-similarity()::invalid input argument. Input arrays must have the same length.' );
	}
	if ( !x.length ) {
		return null;
	}
	if ( clbk ) {
		a = dot( x, y, clbk );
		b = l2norm( x, partial( clbk, 0 ) );
		c = l2norm( y, partial( clbk, 1 ) );
	} else {
		a = dot( x, y );
		b = l2norm( x );
		c = l2norm( y );
	}
	return a / ( b*c );
}


// EXPORTS //

module.exports = similarity;
