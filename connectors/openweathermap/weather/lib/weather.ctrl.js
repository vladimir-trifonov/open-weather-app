var weatherService = require('./weather.service');
var promise = require('promise');

var WeatherCtrl = function() {};

WeatherCtrl.prototype.get = function(type) {
	return function(city) {
		return this._isConfigValid(type)
			.then(function() {
				var request = weatherService.get(this.appid, this.urls[type]);

				// Get weather data by city
				return request(city);
			}.bind(this));
	}.bind(this);
}

WeatherCtrl.prototype.getByLocation = function(type) {
	return function(lat, lon) {
		return this._isConfigValid(type)
			.then(function() {
				var request = weatherService.getByLocation(this.appid, this.urls[type]);

				// Get weather data by location
				return request(lat, lon);
			}.bind(this));
	}.bind(this);
}

// Check if apiKey and the necessary route is present
WeatherCtrl.prototype._isConfigValid = function(type) {
	return new Promise(function(resolve, reject) {
		if (!this.urls[type]) {
			return reject('Missing route for model: ' + type);
		}

		if (!this.appid) {
			return reject('Missing config param: appid');
		}

		resolve();
	}.bind(this));
}

module.exports = WeatherCtrl;