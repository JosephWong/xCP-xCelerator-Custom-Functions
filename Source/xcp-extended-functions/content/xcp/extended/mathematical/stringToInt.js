// stringToInt.js
Ext.namespace ('xcp.extended.functions');

/*
 * Returns an int casted from a string. Returns 0 if number cannot be parsed.
 * 
 * Example:
 * 		stringToInt ("2") 
 * 		returns 2
 */
xcp.extended.functions.stringToInt = function (str) {
	var num = Math.round(parseFloat(str));
	return isNaN(num) ? 0 : num;
}