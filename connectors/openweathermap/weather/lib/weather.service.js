var rp = require('request-promise');
var util = require('util');
var params = {
	// Celsius
	units: 'metric',
	mode: 'json'
}

module.exports = {
	// Get weather data by city
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
	// Get weather data by location
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

// Handle the respone - some codes like 404 are resolving the promise
function handleResponse(response) {
	if (!response || !response.cod || response.cod !== '200') {
		throw new Error(response.message);
	} else {
		return response;
	}
}