'use strict';

const process = require('process');

var Config = {
	server: {
		protocol: 'http://',
		address: process.env.NODE_ENV === 'DEV' ? 'localhost' : '77.220.213.35',
		port: 3030
	},
	client: {
		protocol: 'http://',
		address: process.env.NODE_ENV === 'DEV' ? 'localhost' : '77.220.213.35',
		port: 2929
	}, 
	db: {
		address: 'mongodb://localhost',
		port: '27017',
		name: 'team_manager'
	}
};

process.env.NODE_ENV == undefined && 
	console.log('\n if you want be in development mode & run your app on localhost: ' + 
                '\n\n set NODE_ENV=DEV \n');
process.env.NODE_ENV != undefined &&
	console.log( 'NODE_ENV = ', process.env.NODE_ENV );

module.exports = Config;