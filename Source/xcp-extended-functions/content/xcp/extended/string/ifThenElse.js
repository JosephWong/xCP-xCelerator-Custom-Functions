// ifThenElse.js
Ext.namespace ('xcp.extended.functions');

/*
 * Returns the appropriate result based on the given boolean expression.
 * 
 * Example:
 * 		ifThenElse (true, "TrueStr", "FalseStr") 
 * 		returns "TrueStr"
 */
xcp.extended.functions.ifThenElse = function (expr, resultIfTrue, resultIfFalse) {
	if (expr)
		return resultIfTrue;
	else
		return resultIfFalse;
}