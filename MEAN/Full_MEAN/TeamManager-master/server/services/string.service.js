/** 
 * @name: String Service
 *
 * @description:
 * The service augments the String methods.
 */

/**
 * @description: The method generates random string.
 * @takes string
 * @returns string
 */
function saltGenerate( length ) {
	/** Error Safety */
		length = +length || 1;
	/** end - Error Safety */

	let s = '';
	let abd = 'abcdefghijklmnopqrstuvwxyz0123456789';
	let aL = abd.length;
	while(s.length < length)
		s += abd[Math.random() * aL|0];
	return s;
}

/**
 * @description: Cleans string from special symbols.
 * @takes string
 * @returns string
 */
function clean ( str ) {
	/** Error Safety */
		str = str+'' || '';
	/** end - Error Safety */
	str = str.replace(/[^\w\s]/gi, '');
	str = str.split(' ').join('');
	return str;
}

/** Tests */
	// tests here
/** end - Tests */

let StringService = {
	saltGenerate: saltGenerate,
	clean: clean
}

module.exports = StringService;