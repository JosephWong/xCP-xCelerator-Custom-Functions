// stringToFloat.js
Ext.namespace ('xcp.extended.functions');

/*
 * Returns a float casted from a string. Returns 0 if number cannot be parsed.
 * 
 * Example:
 * 		stringToFloat ("2.4") 
 * 		returns 2.4
 */
xcp.extended.functions.stringToFloat = function (str) {
	var num = parseFloat(str);
	return isNaN(num) ? 0 : num;
}