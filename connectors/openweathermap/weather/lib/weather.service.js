var rp = require('request-promise');
var util = require('util');
var params = {
	units: 'metric',
	mode: 'json'
}

module.exports = {
	get: function(appid, url) {
		return function(city) {
			return rp({
					uri: url,
					qs: util._extend({
						appid: appid,
						q: city
					}, params),
					json: true
				})
				.then(handleResponse);
		}
	},
	getByLocation: function(appid, url) {
		return function(lat, lon) {
			return rp({
					uri: url,
					qs: util._extend({
						appid: appid,
						lat: lat,
						lon: lon
					}, params),
					json: true
				})
				.then(handleResponse);
		}
	}
};

function handleResponse(response) {
	if (!response || !response.cod || response.cod !== '200') {
		throw new Error(response.message);
	} else {
		return response;
	}
}