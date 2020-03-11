var passport = require('passport'),
    GitHubStrategy = require('passport-github').Strategy,
    FacebookStrategy = require('passport-facebook').Strategy,
    config = require('./config');

passport.serializeUser(function(user, done) {
    var sessionUser = {username: user.username, displayName: user.displayName, avatar_url: user._json.avatar_url, _id: user.id}
    done(null, sessionUser);
});

passport.deserializeUser(function(sessionUser, done) {
    done(null, sessionUser);
});

passport.use(new GitHubStrategy({
        clientID: config.get('GITHUB_CLIENT_ID'),
        clientSecret: config.get('GITHUB_CLIENT_SECRET'),
        callbackURL: config.get('GITHUB_CALLBACK')
    }, function(accessToken, refreshToken, profile, done) {
        return done(null, profile);
    })
);

passport.use(new FacebookStrategy({
    clientID: config.get('FACEBOOK_CLIENT_ID'),
    clientSecret: config.get('FACEBOOK_CLIENT_SECRET'),
	callbackURL: config.get('FACEBOOK_CALLBACK'),
	profileFields: ['id', 'displayName', 'photos', 'email']
  },
  function(accessToken, refreshToken, profile, done) {
	return done(null, profile);
  }
));