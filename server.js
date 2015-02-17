'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();
var port = ++ || 9099;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


app.get('/api/user/:id', function(req, res) {
	for(var i = 0; i < user_module.user.length; i++) {
		if(user_module.user[i].id === Number(req.params.id)) {
			return res.json(user_module.user[i]);
		}
	}
});

app.listen(port);