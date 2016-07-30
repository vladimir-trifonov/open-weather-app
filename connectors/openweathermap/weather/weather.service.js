var rp = require('request-promise');

module.exports = {
	get: function(apiid, url) {
		return function() {
			return rp({
				uri: url,
				qs: {
					apiid: apiid
				},
				json: true
			});
		}
	},
	getByLocation: function(apiid, url) {
		return function(lat, lon) {
			return rp({
				uri: url,
				qs: {
					apiid: apiid,
					lat: lat,
					lon: lon
				},
				json: true
			});
		}
	}
};