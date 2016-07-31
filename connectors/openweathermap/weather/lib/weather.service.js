var rp = require('request-promise');

module.exports = {
	get: function(appid, url) {
		return function(city) {
			return rp({
					uri: url,
					qs: {
						appid: appid,
						q: city,
						mode: 'json'
					},
					json: true
				})
				.then(handleResponse);
		}
	},
	getByLocation: function(appid, url) {
		return function(lat, lon) {
			return rp({
					uri: url,
					qs: {
						appid: appid,
						lat: lat,
						lon: lon,
						mode: 'json'
					},
					json: true
				})
				.then(handleResponse);
		}
	}
};

function handleResponse(response) {
	if(!response || !response.cod || response.cod !== '200') {
		throw new Error(response.message);
	} else {
		return response;
	}
}