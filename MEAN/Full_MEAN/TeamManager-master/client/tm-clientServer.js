
/** Help
 * Deploy Angular 2 App - with non-hash strategy
 *
 *    * https://stackoverflow.com/a/34864585 - might be working
 *
 *    + https://stackoverflow.com/a/19171253/7455192
 *    - https://stackoverflow.com/questions/17456729/how-to-redirect-to-single-page-web-app-in-express-for-node
 *    - https://stackoverflow.com/questions/34847972/how-to-handle-angular2-route-path-in-nodejs
*/

'use strict';

const config = require('./tm-clientServer.config');

const express = require('express');
const app = express();

const server = app.listen(
	config.server.port,
	() => {
		console.log(
			'Server listening at ' +
			config.server.protocol +
			config.server.address +
			':' + config.server.port);
	}
);

/*******
* Routes *
********/

/** others **/
	app.use('/', express.static(__dirname + '/dist'));

/** 404 catch **/
	app.all('*', (req, res) => {
		console.log('\n • [TRACE] Server 404 request --> ' + req.originalUrl);

		/* get Static files */

			if( req.originalUrl.indexOf( '/main.bundle.js' ) > -1 ) {
				res.status(200).sendFile(__dirname + '/dist/main.bundle.js');
				console.log('\n sent main.bundle.js');
				return;
			}

			if( req.originalUrl.indexOf( '/vendor.bundle.js' ) > -1 ) {
				res.status(200).sendFile(__dirname + '/dist/vendor.bundle.js');
				console.log('\n sent vendor.bundle.js');
				return;
			}

			if( req.originalUrl.indexOf( '/polyfills.bundle.js' ) > -1 ) {
				res.status(200).sendFile(__dirname + '/dist/polyfills.bundle.js');
				console.log('\n sent polyfills.bundle.js');
				return
			}
			

			if( req.originalUrl.indexOf( '/styles.bundle.js' ) > -1 ) {
				res.status(200).sendFile(__dirname + '/dist/styles.bundle.js');
				console.log('\n sent styles.bundle.js');
				return;
			}

			if( req.originalUrl.indexOf( '/inline.bundle.js' ) > -1 ) {
				res.status(200).sendFile(__dirname + '/dist/inline.bundle.js');
				return;
			}
		/* get Static files - end */


	});