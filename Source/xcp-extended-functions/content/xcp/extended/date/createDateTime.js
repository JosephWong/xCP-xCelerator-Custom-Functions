// createDateTime.js
Ext.namespace ('xcp.extended.functions');

/*
 * Returns the DateTime representation specified by year, month, day, hour, minutes and seconds.
 *
 * The timezone will also be based on the timezone of the browser session doing the evaluation.
 * 
 * Example:
 * 		createDateTime (2012, 0, 31, 15, 45, 0) 
 *		returns the DateTime representation of January 31, 2012, 3:45:00 PM
 */
xcp.extended.functions.createDateTime = function (year, month, day, hour, minute, seconds) {
	var date = new Date();
	date.setFullYear(year, month, day);
	date.setHours(0);
	date.setMinutes(0);
	date.setSeconds(0);
	if (hour != undefined)
		date.setHours(hour);
	if (minute != undefined)
		date.setMinutes(minute);
	if (seconds != undefined)
		date.setSeconds(seconds);
	return date;
}