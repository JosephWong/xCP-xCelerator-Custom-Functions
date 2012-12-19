// floatToInt.js
Ext.namespace ('xcp.extended.functions');

/*
 * Returns an int casted from a float.
 * 
 * Example:
 * 		floatToInt (2.4) 
 * 		returns 2
 */
xcp.extended.functions.floatToInt = function (num) {
	return Math.round(num);
}