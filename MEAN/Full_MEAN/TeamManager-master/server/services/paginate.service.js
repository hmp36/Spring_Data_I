/** 
 * @name: Paginate Service
 *
 * @description:
 * The service makes a pagination.
 */

/**
 * @description: The method creates a paginated array.
 *
 * @takes
 *   _array: Array<any>
 *   itemsPerPage: number
 * 
 * @returns Array<{
 *	 data: Array<any>,
 *	 page: number // current page (numeratiom from 0)
 * }>
 *
 */
function getPages( _array, itemsPerPage ) {
	/** Error Safety */
		_array = _array || [];
		itemsPerPage = +itemsPerPage || 12;
	/** end - Error Safety */

	let paginatedArray = [];

	if(itemsPerPage) {
		let pagesNumber = Math.ceil(_array.length / itemsPerPage) || 0; // ceil - потолок. Math.ceil() - округление к ближайшему большему числу
		for(let curPageIndex = 0; curPageIndex < pagesNumber; curPageIndex++) { // cur - current
			let page = getPage(_array, itemsPerPage, curPageIndex);
			paginatedArray.push(page);
		}
	} else {
		paginatedArray.push({
			pages: _array.length,
			page: 0,
			data: _array
		});
	}

	return paginatedArray;
}

/**
 * @description: Calculates a page with dirrect page index.
 *
 * @takes
 *   _array: Array<any>,
 *   itemsPerPage: number,
 *   pageIndex: number
 * 
 * @returns
 * {
 *	 data: Array<any>,
 *	 page: number, // current page index
 *	 pages: number // amount of pages
 * }
 *
 */
function getPage(_array, itemsPerPage, pageIndex) {
	/** Error Safety */
		_array = _array || [];
		itemsPerPage = +itemsPerPage || 12; // не забывайте дети преобразовывать строку с числом в число, у меня были проблемы и я потерял много времени, хотя метод getPage был 10 раз оттестен, но я ж забыл, что это javascript и тут возможно всё
		pageIndex = +pageIndex || 0;
	/** end - Error Safety */

	// debug
		console.log('\n * getPage - itemsPerPage ', itemsPerPage);
	// end debug

	let beginIndex = pageIndex * itemsPerPage;
	let endIndex = pageIndex * itemsPerPage + itemsPerPage - 1;
	let pageItems = getRangeItems(_array, beginIndex, endIndex);

	// debug
		console.log('\n * getPage - itemsPerPage ', itemsPerPage);
		console.log(' * getPage - beginIndex ', beginIndex);
		console.log(' * getPage - endIndex ', endIndex);
	// end debug


	let pagesNumber = Math.ceil(_array.length / itemsPerPage) || 0; // ceil - потолок. Math.ceil() - округление к ближайшему большему числу
	let page = {
		pages: pagesNumber,
		page: pageIndex,
		data: pageItems
	}
	return page;
}

/**
 * @description: Cuts and returns a range from an array.
 *
 * @takes
 * _array: Array<any>,
 * beginIndex: number,
 * endIndex: number
 *
 * @returns Array<any>
 */
function getRangeItems(_array, beginIndex, endIndex) {
	/** Error Safety */
		_array = _array || [];
		beginIndex = +beginIndex || 0;
		endIndex = +endIndex || 0;
	/** end - Error Safety */

	let resultArray = [];
	for(let i = beginIndex; i <= endIndex; i++) {
		_array[i] && resultArray.push(_array[i]);
	}
	return resultArray;
}

/** Tests */
	let testPages = [ 'p0', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10', 'p11','p12', 'p13', 'p14', 'p15', 'p16' ];
	let itemsPerPage = 5;

	function test_getPages() {
		console.log('\n * test * test_getPages()');
		console.log('Source array: \n', testPages);

		let paginatedArray = getPages(testPages, itemsPerPage);
		console.log('Items per page must be (last page can be less): ', itemsPerPage);
		console.log('Paginated array: \n', paginatedArray);

		console.log('end * test * getPages() ');
	}
	test_getPages();

	function test_getPage() {
		console.log('\n * test * test_getPage()');
		console.log('Source array: \n', testPages);

		let pageIndex = 2;
		let page = getPage(testPages, itemsPerPage, pageIndex);
		console.log('Items per page must be (last page can be less): ', itemsPerPage);
		console.log('page # ' + pageIndex + ': \n', page);

		console.log('end * test * getPage()');
	}
	test_getPage();
/** end - Tests */

let PaginateService = {
	getPage: getPage,
	getPages: getPages,
	getRangeItems: getRangeItems
}

module.exports = PaginateService;