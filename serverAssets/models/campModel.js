'use strict';
var Mongoose = require('mongoose');

var siteSchema = Mongoose.Schema({
	name: {type: String, required: true},
	loc: { type: Array, index: "2d", required: true},
	trailHead: {type: Boolean, required: true},
	price: {type: Number, required: true},
	description: String
});

module.exports = Mongoose.model('Site', siteSchema);


