'use strict';
var Mongoose = require('mongoose'),
	Schema = Mongoose.Schema;

var userSchema = new Schema({
	name: {type: String, required: true},
	facebookId: {type: Number, required: true, unique: true},
	picture: String,
	gender: {type: String, enum: ['male', 'female', 'undecided'], required: true}
});

module.exports = Mongoose.model('User', userSchema);


