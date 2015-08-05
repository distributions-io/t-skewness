'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive-primitive' );


// SKEWNESS //

/**
* FUNCTION skewness( v )
*	Computes the distribution skewness for a Student t distribution with parameter v.
*
* @param {Number} v - degrees of freedom
* @returns {Number} distribution skewness
*/
function skewness( v ) {
	if ( !isPositive( v ) ) {
		return NaN;
	}
	return v > 3 ? 0 : NaN;
} // end FUNCTION skewness()


// EXPORTS

module.exports =  skewness;
