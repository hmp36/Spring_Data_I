const User = require('../models/user.model');
const _ = require('lodash');

let UserController = {};

/**
 * GET - get all
 */
UserController.getAll = (req, res) => {
  User.find( (err, docs) => {
    let result = {
      text: 'Get all users – ' + (err ? 'fail' : 'success'),
      isError: err ? true : false,
      err: err,
      data: docs
    };
    res.send(result);
  } );
};

/**
 * GET - get one
 */
UserController.get = (req, res) => {
  User.findOne({_id: req.params.id}, (err, doc) => {
    let result = {
      text: 'Get an user – ' + (err ? 'fail' : 'success'),
      isError: err ? true : false,
      err: err,
      data: doc
    };
    res.send(result);
  } );
};

/**
 * POST - create
 */
UserController.create = (req, res) => {
  let _user = new User(req.body);
  _user.save( (err, doc) => {
    let result = {
      text: 'Create an user – ' + (err ? 'fail' : 'success'),
      isError: err ? true : false,
      err: err,
      data: doc
    };
    res.send(result);
  });
};

/**
 * PUT - update
 */
UserController.update = (req, res) => {
  User.update( {_id: req.params.id}, req.body, (err_update, operationResult) => {
    User.findOne({_id: req.params.id}, (err_find, doc) => {
      let result = {
        text: 'Update an user – ' + (err_update ? 'fail' : 'success'),
        isError: err_update ? true : false,
        err: err_update,
        data: doc
      };
      res.send(result);
    } );
  });
};

/**
 * DELETE - remove
 */
UserController.remove = (req, res) => {
  User.findOne({_id: req.params.id}, (err_find, doc) => {
    User.remove({_id: req.params.id}, (err_remove) => {
      let result = {
        text: 'Delete an user – ' + (err_remove ? 'fail' : 'success'),
        isError: err_remove ? true : false,
        err: err_remove,
        data: doc
      };
      res.send(result);
    });
  } );
};

module.exports = UserController;