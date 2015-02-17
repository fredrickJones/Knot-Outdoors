'use strict';
var Express = require('express'),
	Session = require('express-session'),
	Passport = require('passport'),
	FacebookStrategy = require('passport-facebook').Strategy,
	InstagramStrategy = require('passport-instagram').Strategy,
	TwitterStrategy = require('passport-twitter').Strategy,
	BodyParser = require('body-parser'),
	Request = require('request');

var env = require('./serverAssets/env');

var app = Express();
var port = 9099;

// middleware
app.use(Express.static(__dirname + '/public'));
app.use(BodyParser.urlencoded({extended: false}));
app.use(Session({secret: 'AGEGIEO38423dknoiwhud983u3Efhe83bf3RsG'}));
app.use(Passport.initialize());
app.use(Passport.session());

Passport.use(new FacebookStrategy({
	clientID: env.FACEBOOK.APP_ID,
	clientSecret: env.FACEBOOK.APP_SECRET,
	callbackURL: "http://localhost:9099/auth/facebook/callback",
	enableProof: false
	}, function(accessToken, refreshToken, profile, done) {
		User.findOrCreate({facebookId: profile.id}, function(err, user) {
		return done(err, user);
	});
}));

Passport.use(new InstagramStrategy({
	clientID: env.INSTAGRAM.CLIENT_ID,
	clientSecret: env.INSTAGRAM.CLIENT_SECRET,
	callbackURL: "http://127.0.0.1:9099/auth/instagram/callback"
	}, function(accessToken, refreshToken, profile, done) {
		User.findOrCreate({instagramId: profile.id}, function(err, user) {
			return done(err, user);
	});
}));

Passport.use(new TwitterStrategy({
	clientID: env.TWITTER.CONSUMER_KEY,
	clientSecret: env.TWITTER.CONSUMER_SECRET,
	callbackURL: "http://127.0.0.1:9099/auth/twitter/callback"
	}, function(accessToken, refreshToken, profile, done) {
		User.findOrCreate({twitterId: profile.id}, function(err, user) {
			return done(err, user);
	});
}));


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
	done(null, obj);
});


app.get('/auth/facebook', Passport.authenticate('facebook'));
app.get('/auth/facebook/callback', Passport.authenticate('facebook', {
	failureRedirect: '/login'
}), function(req, res) {
	res.redirect('/');	// <--Successful authentication, redirect to dashboard.
});

app.get('/auth/instagram', Passport.authenticate('instagram'));
app.get('/auth/instagram/callback', Passport.authenticate('instagram', {
	failureRedirect: '/login'
}), function(req, res) {
	res.redirect('/');	// <--Successful authentication, redirect to dashboard.
});

app.get('/auth/twitter', Passport.authenticate('twitter'));
app.get('/auth/twitter/callback', Passport.authenticate('twitter', {
	failureRedirect: '/login'
}), function(req, res) {
	res.redirect('/');	// <--Successful authentication, redirect to dashboard.
});


app.get('/api/user/:id', isAuthed, function(req, res) {
	for(var i = 0; i < user_module.user.length; i++) {
		if(user_module.user[i].id === Number(req.params.id)) {
			return res.json(user_module.user[i]);
		}
	}
});

app.listen(port, function() {
	// console.log('Now listening on port 9099');
});