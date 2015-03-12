'use strict';
var Mongoose = require('mongoose'),
	Schema = Mongoose.Schema;

var userSchema = new Schema({
	provider: {type: String, required: true},
	id: {type: String, required: true, unique: true},
	name: {type: String, required: true},
	gender: {type: String, enum: ['male', 'female', 'undecided'], required: true},
	locale: {type: String}
});

module.exports = Mongoose.model('User', userSchema);


