// dateToString.js
Ext.namespace ('xcp.extended.functions');

/*
 * Returns a String casted from a date.
 * 
 * The date format can be either "short", "medium", "long", 
 * or a custom format using the definitions in the below table.
 * "short", "medium" and "long" formats are locale-specific.
 *
 * yyyy	- 4-digit representation of year (2012)
 * yy	- 2-digit representation of year (12)
 * MMMM - Full textual representation of month (July)
 * MMM	- Short textual representation of month (Jul)
 * MM	- Numeric representation of month, with leading zeros (07)
 * M	- Numeric representation of month, without leading zeros (7)
 * EEEE - Full textual representation of day (Wednesday)
 * EEE	- Short textual representation of day (Wed)
 * dd	- Numeric representation of day, with leading zeros (04)
 * d	- Numeric representation of day, without leading zeros (4)
 * HH	- 24-hour format of hour with leading zeros (08)
 * H	- 24-hour format of hour without leading zeros (8)
 * hh	- 12-hour format of hour with leading zeros (08)
 * h	- 12-hour format of hour without leading zeros (8)
 * mm	- Minutes representation (11)
 * ss	- Seconds representation (06)
 * S	- Milliseconds representation (083)
 * A	- Uppercase AM or PM
 * a	- Lowercase am or pm
 * zzz	- Timezone abbreviation (PDT)
 * Z	- Numeric timezone representation (-08:00)
 * 
 * Please note that all the strings for the format are case sensitive.
 * If a format is not provided, the JavaScript string representation of a date will be used.
 *
 * Example: (assume date is July 4th, 2012, 8:11:06:083 AM PDT)
 * 		dateToString (date) 
 * 		returns "07/04/12 08:11 am" (en_US locale)
 *
 * 		dateToString (date, "short") 
 * 		returns "07/04/12 08:11 am" (en_US locale)
 *
 * 		dateToString (date, "long") 
 * 		returns "July 04, 2012 08:11:06 am PDT" (en_US locale)
 *
 * 		dateToString (date, "d MMM, 'yy h:mm A") 
 * 		returns "4 Jul '12 8:11 AM"
 *
 * 		dateToString (date, "EEEE MM/dd/yyyy h:mm:ss.S A Z") 
 * 		returns "Wednesday 07/04/2012 08:11:06.083 AM -08:00"
 */
xcp.extended.functions.dateToString = function (date, format) {
	if (!date)
		return '';
		
	if (Ext.isString(date))
		date = xcp.functions.stringToDate(date);
		
	if (!Ext.isDate(date)) {
		xcp.Logger.info('The input \'' + date + '\' cannot be parsed as a date.');
		return '';
	}
		
	if (!format)
		return date.toLocaleString();
		
	var jsFormat = format;
	
	var LOCALE_FORMAT_REGEXP = "short|medium|long";
	
	if (format.match(LOCALE_FORMAT_REGEXP)) {
		jsFormat = xcp.Formats.dateFormats[format] + " " + xcp.Formats.timeFormats[format];
	} else {
		// 4 digit year representation
		jsFormat = jsFormat.replace(/yyyy/gi, "Y");
		// 2 digit year representation
		jsFormat = jsFormat.replace(/yy/gi, "y");
		
		// Fully worded month representation
		jsFormat = jsFormat.replace(/MMMM/g, "F");
		// Short-hand worded month representation
		jsFormat = jsFormat.replace(/MMM/g, "M");
		// 2 digit month representation, surrounded by # for identification as needed for replacement.
		jsFormat = jsFormat.replace(/MM/g, "#m#");
		// Month representation without leading zeros
		jsFormat = jsFormat.replace(/m/g, "n");
		// Convert back 2 digit month representation by looking for # surrounded keys.
		jsFormat = jsFormat.replace(/#n#/g, "m");
		
		// Fully worded day representation
		jsFormat = jsFormat.replace(/EEEE/gi, "l");
		// Short-hand worded day representation
		jsFormat = jsFormat.replace(/EEE/gi, "D");
		// 2 digit day representation, surrounded by # for identification as needed for replacement.
		jsFormat = jsFormat.replace(/dd/gi, "#d#");
		// Day representation without leading zeros
		jsFormat = jsFormat.replace(/d/g, "j");
		// Convert back 2 digit day representation by looking for # surrounded keys.
		jsFormat = jsFormat.replace(/#j#/g, "d");
		
		// 24-hour format of hour with leading zeros
		jsFormat = jsFormat.replace(/HH/g, "#H#");
		// 24-hour format of hour without leading zeros
		jsFormat = jsFormat.replace(/H/g, "G");
		// Convert back hour representation with leading zeros by looking for # surrounded keys.
		jsFormat = jsFormat.replace(/#G#/g, "H");
		
		// 12-hour format of hour with leading zeros
		jsFormat = jsFormat.replace(/hh/g, "#h#");
		// 12-hour format of hour without leading zeros
		jsFormat = jsFormat.replace(/h/g, "g");
		// Convert back hour representation with leading zeros by looking for # surrounded keys.
		jsFormat = jsFormat.replace(/#g#/g, "h");
		
		// Minutes (Converting from nn because m was changed to n)
		jsFormat = jsFormat.replace(/nn/g, "i");
		
		// Seconds
		jsFormat = jsFormat.replace(/ss/g, "s");
		
		// Milliseconds
		jsFormat = jsFormat.replace(/S/g, "u");
		
		// Worded Timezone
		jsFormat = jsFormat.replace(/zzzz/gi, "T");
		jsFormat = jsFormat.replace(/zzz/gi, "T");
		
		// Numeric Timezone
		jsFormat = jsFormat.replace(/Z/g, "P");
	}
	
	return Ext.Date.format(date, jsFormat);
}