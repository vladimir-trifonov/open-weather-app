var Weather = require('../../weather');

/**
 * Connects to your data store; this connection can later be used by your connector's methods.
 * @param next
 */
exports.connect = function (next) {
	// Init weather component
	this.client = Weather.create(this.config.appid, this.config.urls);
	next();
};
