'use strict';

/*************
* Controllers *
**************/
const userController = require('./controllers/user.controller');

const _ = require('lodash');
const bodyParser = require('body-parser');
const express = require('express');

const config = require('./config');

/************
* Run Server *
*************/
const serverAddr = config.server.protocol +
				   config.server.address +
				   ':' + 
				   config.server.port;
const app = express();
const server = app.listen(config.server.port, () => {
	console.log('Server listening at ' + serverAddr);
});

/************
* Connect DB *
*************/
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://' + config.db.address + ':' + config.db.port + '/' + config.db.name);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error:'));
db.once('open', () => {
	console.log("Successfully connected to MongoDB");
});


/*******
* Routes *
********/

/** Cross Origin Requests **/
	let allowedHeaders = [
		'Access-Control-Allow-Origin',
		'Content-Type',
		'Enctype',
		'Authorization',
		'Keep-Alive'
	];
	allowedHeaders = allowedHeaders.join(', ');

	let allowedDomains = '*';

	let allowedMethods = [
		'POST',
		'GET',
		'PUT',
		'DELETE'
	];
	allowedMethods = allowedMethods.join(', ');

	app.use((req, res, next) => {
		res.setHeader('Access-Control-Allow-Headers', allowedHeaders);
		res.setHeader('Access-Control-Allow-Origin', allowedDomains);
		res.setHeader('Access-Control-Allow-Methods', allowedMethods);
		return next();
	});
/** end - Cross Origin Requests **/

/** others **/
	app.use('/', express.static(__dirname + '/public'));
	app.use(bodyParser.json());
/** end - others **/


/** User entity **/
	app.get   ('/users' ,       userController.getAll);
	app.get   ('/users/:id' ,   userController.get);
	app.post  ('/users' ,       userController.create);
	app.put   ('/users/:id' ,   userController.update);
	app.delete('/users/:id' ,   userController.remove);
/** end - User entity **/