'use strict';

/** entity
 *  User
 * 
 * @roles:
 * employee,
 * employer
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	role: {type: String, default: 'employee'}, // see @roles
	name_first: {type: String, default: 'Name'},
	name_last: {type: String, default: 'Surname'},
	age: {type: Number, default: 18},
	skill: {
		level: {type: Number, default: 1, min: 1, max: 3},
		name: {type: String, default: 'SkillName'}
	}
});

const User = mongoose.model('User', UserSchema);

module.exports = User;