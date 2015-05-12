/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	similarity = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-cosine-similarity', function tests() {

	it( 'should export a function', function test() {
		expect( similarity ).to.be.a( 'function' );
	});

	it( 'should throw an error if the first argument is not an array', function test() {
		var values = [
			'5',
			5,
			null,
			undefined,
			NaN,
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				similarity( value, [1,2,3] );
			};
		}
	});

	it( 'should throw an error if the second argument is not an array', function test() {
		var values = [
			'5',
			5,
			null,
			undefined,
			NaN,
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				similarity( [1,2,3], value );
			};
		}
	});

	it( 'should throw an error if provided an accessor which is not a function', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				similarity( [2,3,4], [3,1,2], value );
			};
		}
	});

	it( 'should throw an error if the input arrays are not of equal length', function test() {
		expect( foo ).to.throw( Error );

		function foo() {
			similarity( [1,2,3], [1,2,3,4] );
		}
	});

	it( 'should return null if provided empty arrays', function test() {
		assert.isNull( similarity( [], [] ) );
	});

	it( 'should compute the cosine distance', function test() {
		var dat1, dat2, expected, actual;

		dat1 = [ 2, 4, 5, 3, 8, 2 ];
		dat2 = [ 3, 1, 5, 3, 7, 2 ];

		actual =  similarity( dat1, dat2 );

		// 1 - cosine distance
		expected = 1 - 0.04397873;

		assert.closeTo( actual, expected, 1e-7 );
	});

	it( 'should compute the cosine distance using an accessor function', function test() {
		var dat1, dat2, expected, actual;

		dat1 = [
			{'x':2},
			{'x':4},
			{'x':5},
			{'x':3},
			{'x':8},
			{'x':2}
		];
		dat2 = [
			[1,3],
			[2,1],
			[3,5],
			[4,3],
			[5,7],
			[6,2]
		];

		actual = similarity( dat1, dat2, getValue );

		// 1 - cosine distance
		expected = 1- 0.04397873;

		assert.closeTo( actual, expected, 1e-7 );

		function getValue( d, i, j ) {
			if ( j === 0 ) {
				return d.x;
			}
			return d[ 1 ];
		}
	});

});
