'use strict';

var similarity = require( './../lib' );

var x = new Array( 100 ),
	y = new Array( 100 ),
	s;

for ( var i = 0; i < x.length; i++ ) {
	x[ i ] = Math.round( Math.random()*100 );
	y[ i ] = Math.round( Math.random()*100 );
}
s = similarity( x, y );

console.log( s );
