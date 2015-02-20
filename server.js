'use strict';
var Express = require('express'),
	Session = require('express-session'),
	BodyParser = require('body-parser'),
	Passport = require('passport'),
	FacebookStrategy = require('passport-facebook').Strategy,
	// InstagramStrategy = require('passport-instagram').Strategy,
	// TwitterStrategy = require('passport-twitter').Strategy,
	Mongoose = require('mongoose'),
	Cors = require('cors'),
	Request = require('request');	// <--Don't know if I need this

var env = require('./serverAssets/env'),
	userCtrl = require('./serverAssets/controllers/userControl'),
	rockControl = require('./serverAssets/controllers/rockControl');

var app = Express();
var port = 9099;
var mongoURI = 'localhost/outdoors';

// middleware
app.use(Express.static(__dirname + '/public'));
app.use(BodyParser.json());
app.use(Session({secret: 'AGEGIEO38423dknoiwhud983u3Efhe83bf3RsG', saveUninitialized: true, resave: true}));
app.use(Passport.initialize());
app.use(Passport.session());

Passport.use(new FacebookStrategy({
	clientID: env.FACEBOOK.APP_ID,
	clientSecret: env.FACEBOOK.APP_SECRET,
	callbackURL: "http://localhost:9099/auth/facebook/callback"
	}, function(token, refreshToken, profile, done) {
		userCtrl.updateOrCreate(profile).then(function(results) {
			done(null, profile);
		}, function(err) {
			done(err, profile);
		}
	);
}));

// Passport.use(new InstagramStrategy({
// 	clientID: env.INSTAGRAM.CLIENT_ID,
// 	clientSecret: env.INSTAGRAM.CLIENT_SECRET,
// 	callbackURL: "http://127.0.0.1:9099/auth/instagram/callback"
// 	}, function(accessToken, refreshToken, profile, done) {
// 		User.findOrCreate({instagramId: profile.id}, function(err, user) {
// 			return done(err, user);
// 	});
// }));

// Passport.use(new TwitterStrategy({
// 	clientID: env.TWITTER.CONSUMER_KEY,
// 	clientSecret: env.TWITTER.CONSUMER_SECRET,
// 	callbackURL: "http://127.0.0.1:9099/auth/twitter/callback"
// 	}, function(accessToken, refreshToken, profile, done) {
// 		User.findOrCreate({twitterId: profile.id}, function(err, user) {
// 			return done(err, user);
// 	});
// }));


var isAuthed = function(req, res, next) {
	if(!req.isAuthenticated()) {
		return res.status(403).end();
	} else {
		next();
	}
};


Passport.serializeUser(function(user, done) {
	done(null, user);
});
Passport.deserializeUser(function(obj, done) {
	userCtrl.getUser(obj.id).then(function(results) {
		done(null, results);
	}, function(err) {
		done(null, obj);
	});
});


app.get('/auth/facebook', Passport.authenticate('facebook'), function(req, res) {
	return res.status(200).end();
});
app.get('/auth/facebook/callback', Passport.authenticate('facebook', {
	failureRedirect: '/login', successRedirect: '/#/dashboard'	// <--Successful authentication, redirect to dashboard.
}));

// app.get('/auth/instagram', Passport.authenticate('instagram'));
// app.get('/auth/instagram/callback', Passport.authenticate('instagram', {
// 	failureRedirect: '/login'
// }), function(req, res) {
// 	res.redirect('/');	// <--Successful authentication, redirect to dashboard.
// });

// app.get('/auth/twitter', Passport.authenticate('twitter'));
// app.get('/auth/twitter/callback', Passport.authenticate('twitter', {
// 	failureRedirect: '/login'
// }), function(req, res) {
// 	res.redirect('/');	// <--Successful authentication, redirect to dashboard.
// });


app.get('/api/user/:id', isAuthed, function(req, res) {
});



Mongoose.connect(mongoURI);
Mongoose.connection.once('open', function(){
	console.log('connected to mongoDB via ' + mongoURI);
});
app.listen(port, function() {
	console.log('listening on port ' + port);
});


