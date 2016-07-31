var weatherService = require('./weather.service');
var promise = require('promise');

var WeatherCtrl = function() {};

WeatherCtrl.prototype.get = function(type) {
	return function(city) {
		if(!this.urls[type]) {
			return promise.reject('Missing route for model: ' + type);
		}

		var request = weatherService.get(this.appid, this.urls[type]);

		return request(city);
	}.bind(this);
}

WeatherCtrl.prototype.getByLocation = function(type) {
	return function(lat, lon) {
		if(!this.urls[type]) {
			return promise.reject('Missing route for model: ' + type);
		}

		var request = weatherService.getByLocation(this.appid, this.urls[type]);

		return request(lat, lon);
	}.bind(this);
}

module.exports = WeatherCtrl;