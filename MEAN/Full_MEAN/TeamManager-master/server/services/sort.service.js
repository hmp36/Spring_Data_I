/** 
 * @name: Sort Service
 *
 * @description:
 * The service contains sort methods.
 */

/**
 * @description: The method sorts arrays of any types by any property(if element is object).
 *
 * @explain sortBy
 *   'String' – sort by string by Increase (a→z)
 *   'string' – sort by string by Reduce   (z→a)
 *   'Number' – sort by number by Increase (-∞ → ∞)
 *   'number' – sort by number by Reduce   (∞ → -∞)
 *
 * @explain propertyTrackBy
 *   sort method will track by this property name.
 *   sort by date:
 *   [{date: 1503054414658}, {date: 1503054412731}, {date: 1503054491136}, {date: 1503054469988}]
 *
 * @takes
 *   _array: Array<Object>
 *   itemsPerPage: number
 * 
 * @returns
 *   array_: Array<Object>
 *   sortBy: string, // see @explain sortBy
 *   propertyTrackBy: string // see @explain propertyTrackBy
 */
function sort( array_, sortBy, propertyTrackBy ) {
	// unbind incoming array_
	let _array = JSON.parse(JSON.stringify(array_));

	let sortedArray;

	/** Error Safety */
		_array = _array || [];
		(typeof sortBy !== 'string') && (sortBy = '');
		(typeof propertyTrackBy !== 'string') && (sorpropertyTrackBytBy = '');
	/** end - Error Safety */

	// -- sort by String by Increase
	if(sortBy === 'String') {
		console.log('\n * sort by String by Increase - ', sortBy, ' - ', propertyTrackBy);
		sortedArray = _array.sort((A, B) => {
			let a = A[propertyTrackBy].toLowerCase(); // ignore register
			let b = B[propertyTrackBy].toLowerCase(); // ignore register
			if (a < b) {
				return -1;
			}
			if (a > b) {
				return 1;
			}
			// propertyTrackBy in A equals propertyTrackBy in B
			return 0;
		});
	}

	// -- sort by string by Reduce
	else if(sortBy === 'string') {
		console.log('\n * sort by string by Reduce - ', sortBy, ' - ', propertyTrackBy);
		sortedArray = _array.sort((A, B) => {
			let a = A[propertyTrackBy].toLowerCase(); // ignore register
			let b = B[propertyTrackBy].toLowerCase(); // ignore register
			if (b < a) {
				return -1;
			}
			if (b > a) {
				return 1;
			}
			// propertyTrackBy in A equals propertyTrackBy in B
			return 0;
		});
	}

	// -- sort by Number by Increase
	else if(sortBy === 'Number') {
		console.log('\n * sort by Number by Increase - ', sortBy, ' - ', propertyTrackBy);
		sortedArray = _array.sort((A, B) => {
			return A[propertyTrackBy] - B[propertyTrackBy];
		});
	}

	// -- sort by number by Reduce
	else if(sortBy === 'number') {
		console.log('\n * sort by number by Reduce - ', sortBy, ' - ', propertyTrackBy);
		sortedArray = _array.sort((A, B) => {
			return B[propertyTrackBy] - A[propertyTrackBy];
		});
	}

	else {
		sortedArray = _array;
	}

	return sortedArray;
}

/** Tests */
	let testArray = [
	{ firstName: 'The',      numberValue: 51, date: 1503054469988},
	{ firstName: 'And',      numberValue: 37, date: 1503057628611},
	{ firstName: 'Edward',   numberValue: 13, date: 1503057638606},
	{ firstName: 'Sharpe',   numberValue: 37, date: 1503054412731},
	{ firstName: 'Zeros',    numberValue: -7, date: 1503054414658},
	{ firstName: 'Magnetic', numberValue: 45, date: 1503054491136}
	];

	function test_sort() {
		console.log('\n * test * sort()');
		console.log('\nSource Unsorted Array: \n', testArray);

		// firstName: string
			let sorted_by_firstName_by_increase =   sort(testArray, 'String', 'firstName');
			console.log(`\nSorted by 'firstName' – A → Z: \n`, sorted_by_firstName_by_increase);

			let sorted_by_firstName_by_reduce =     sort(testArray, 'string', 'firstName');
			console.log(`\nSorted by 'firstName' – Z → A: \n`, sorted_by_firstName_by_reduce);

		// numberValue: number
			let sorted_by_numberValue_by_increase = sort(testArray, 'Number', 'numberValue');
			console.log(`\nSorted by 'numberValue' – (-∞ → ∞) : \n`, sorted_by_numberValue_by_increase);

			let sorted_by_numberValue_by_reduce =   sort(testArray, 'number', 'numberValue');
			console.log(`\nSorted by 'numberValue' – (∞ → -∞) : \n`, sorted_by_numberValue_by_increase);

		// date: number (timestamp)
			let sorted_by_date_by_increase =        sort(testArray, 'Number', 'date');
			console.log(`\nSorted by 'value' – Old → New (-∞ → ∞) : \n`, sorted_by_date_by_increase);

			let sorted_by_date_by_reduce =          sort(testArray, 'number', 'date');
			console.log(`\nSorted by 'value' – New → Old (∞ → -∞) : \n`, sorted_by_date_by_reduce);

		console.log('end * test * sort()');
	}
	test_sort();
/** end - Tests */

let SortService = {
	sort: sort
}

module.exports = SortService;