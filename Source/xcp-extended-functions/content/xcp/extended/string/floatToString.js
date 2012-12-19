// floatToString.js
Ext.namespace ('xcp.extended.functions');

/*
 * Returns a String casted from a float.
 * 
 * Example:
 * 		floatToString (3.0)
 * 		returns "3"
 * 
 * 		floatToString (3.01)
 * 		returns "3.01"
*/
xcp.extended.functions.floatToString = function (num) {
	return "" + num;
}