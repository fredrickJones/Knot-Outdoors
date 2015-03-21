'use strict';
var Mongoose = require('mongoose');

var hikeSchema = Mongoose.Schema({
	name: {type: String, required: true},
	loc: { type: Array, index: "2d", required: true},
	distance: {type: Number, required: true},
	description: String
});

module.exports = Mongoose.model('Trail', hikeSchema);