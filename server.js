'use strict';
var Express = require('express'),
	Session = require('express-session'),
	BodyParser = require('body-parser'),
	Passport = require('passport'),
	FacebookStrategy = require('passport-facebook').Strategy,
	InstagramStrategy = require('passport-instagram').Strategy,
	TwitterStrategy = require('passport-twitter').Strategy,
	Mongoose = require('mongoose');

var env = require('./serverAssets/env'),
	userControl = require('./serverAssets/controllers/userControl'),
	rockControl = require('./serverAssets/controllers/rockControl'),
	campControl = require('./serverAssets/controllers/campControl'),
	hikeControl = require('./serverAssets/controllers/hikeControl');

var app = Express();
var port = process.env.EXPRESS_PORT || 9099;
var mongoURI = 'localhost/outdoors';

Mongoose.connect(mongoURI);


// MIDDLEWARE
app.use(Express.static(__dirname + '/public'));
app.use(BodyParser.json());
app.use(Session({secret: 'AGEGIEO38423dknoiwhud983u3Efhe83bf3RsG', saveUninitialized: true, resave: true}));
app.use(Passport.initialize());
app.use(Passport.session());


// AUTHORIZATION FUNCTIONS
	// FACEBOOK
Passport.use(new FacebookStrategy({
	clientID: process.env.FACEBOOK_ID || env.FACEBOOK.APP_ID,
	clientSecret: process.env.FACEBOOK_SECRET || env.FACEBOOK.APP_SECRET,
	callbackURL: process.env.FACEBOOK_CB || "http://localhost:9099/auth/facebook/callback"
	}, function(token, refreshToken, profile, done) {
		userControl.updateOrCreate(profile).then(function(results) {
			done(null, profile);
		}, function(err) {
			done(err, profile);
		}
	);
}));
app.get('/auth/facebook', Passport.authenticate('facebook'), function(req, res) {
	return res.status(200).end();
});
app.get('/auth/facebook/callback', Passport.authenticate('facebook', {
	failureRedirect: '/'}), function(req, res) {
	res.redirect('/#/dashboard')	// <--Successful authentication, redirect to dashboard.
});

	// INSTAGRAM
Passport.use(new InstagramStrategy({
	clientID: process.env.INSTAGRAM_ID || env.INSTAGRAM.CLIENT_ID,
	clientSecret: process.env.INSTAGRAM_SECRET || env.INSTAGRAM.CLIENT_SECRET,
	callbackURL: process.env.INSTAGRAM_CB || "http://127.0.0.1:9099/auth/instagram/callback"
	}, function(accessToken, refreshToken, profile, done) {
		userControl.updateOrCreate(profile).then(function(results) {
			done(null, profile);
		}, function(err) {
			done(err, profile);
		}
	);
}));
app.get('/auth/instagram', Passport.authenticate('instagram'));
app.get('/auth/instagram/callback', Passport.authenticate('instagram', {
	successRedirect: '/#/dashboard',	// <--Successful authentication, redirect to dashboard.
	failureRedirect: '/'
}));

	// TWITTER
Passport.use(new TwitterStrategy({
	consumerKey: process.env.TWITTER_KEY || env.TWITTER.CONSUMER_KEY,
	consumerSecret: process.env.TWITTER_SECRET || env.TWITTER.CONSUMER_SECRET,
	callbackURL: "http://127.0.0.1:9099/auth/twitter/callback"
	}, function(token, tokenSecret, profile, done) {
		User.findOrCreate(profile).then(function(results) {
			console.log(results);
			done(null, profile);
		}, function(err) {
			done(err, profile);
	});
}));
app.get('/auth/twitter', Passport.authenticate('twitter'));
app.get('/auth/twitter/callback', Passport.authenticate('twitter', {
	successRedirect: '/#/dashboard',	// <--Successful authentication, redirect to dashboard.
	failureRedirect: '/'
}));


// PASSPORT
Passport.serializeUser(function(user, done) {
	done(null, user);
});
Passport.deserializeUser(function(obj, done) {
	userControl.getUser(obj.id).then(function(results) {
		done(null, results);
	}, function(err) {
		done(null, obj);
	});
});


// AUTH VERIFICATION
var isAuthed = function(req, res, next) {
	if(!req.isAuthenticated()) {
		return res.status(403).end();
	} else {
		next();
	}
};


// CRUD FUNCTIONS
app.post('/api/user', isAuthed, userControl.addUser);
app.get('/api/user/:id', isAuthed, userControl.getUser);

app.post('/api/rockClimb', isAuthed, rockControl.create);
app.get('/api/rockClimb', rockControl.getCrags);

app.post('/api/hiking', isAuthed, hikeControl.create);
app.get('/api/hiking', hikeControl.getTrails);

app.post('/api/camping', isAuthed, campControl.create);
app.get('/api/camping', campControl.getSites);

// app.post('/api/fishing', isAuthed, rockControl.create);
// app.get('/api/fishing', rockControl.getCrags);

app.get('/api/currentUser', function(req, res) {
	res.status(200).json(req.user);
});
app.get('/api/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});


// CONNECTIONS
Mongoose.connection.once('open', function(){
	// console.log('connected to mongoDB via ' + mongoURI);
});
app.listen(port, function() {
	// console.log('listening on port ' + port);
});


