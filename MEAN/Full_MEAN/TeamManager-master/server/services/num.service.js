/** 
 * @name: Num Service
 *
 * @description:
 * The service augments the Number methods.
 */

/**
 * @description: The method calculates a random number.
 * @takes
 *   min: number,
 *   max: number
 * @returns number
 */
function getRand( min, max ) {
	/** Error Safety */
		min = +min || 0;
		max = +max || 100;
	/** end - Error Safety */
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Tests */
	// tests here
/** end - Tests */

let NumService = {
	getRand: getRand
}

module.exports = NumService;