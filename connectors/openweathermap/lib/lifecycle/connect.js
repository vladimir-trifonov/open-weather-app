var Weather = require('../../models/weather.js');

/**
 * Connects to your data store; this connection can later be used by your connector's methods.
 * @param next
 */
exports.connect = function (next) {
	this.client = Weather.create(this.config.apiid, this.config.urls);
	next();
};
