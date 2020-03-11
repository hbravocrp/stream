var nconf = require('nconf');

nconf.argv().env();

nconf.defaults({
	MONGODB_URI: 'mongodb://localhost/stream_nodejs',
	PORT: 3300,
	GITHUB_CLIENT_ID: '7596586e251b81da2e9a',
	GITHUB_CLIENT_SECRET: 'e00c287b3abd760348742bd82eb94225cb67b6c2',
	GITHUB_CALLBACK: '/auth/github/callback',

	FACEBOOK_CLIENT_ID: '207936149257491',
	FACEBOOK_CLIENT_SECRET: '56152f1f19467fa9ee743c676afdfb3b',
	FACEBOOK_CALLBACK: '/auth/facebook/callback'

});

module.exports = nconf;
