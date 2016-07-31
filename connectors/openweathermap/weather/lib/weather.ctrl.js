var weatherService = require('./weather.service');

var WeatherCtrl = function() {};

WeatherCtrl.prototype.get = function(type) {
	return function(city) {
		var request = weatherService.get(this.appid, this.urls[type]);

		return request(city);
	}.bind(this);
}

WeatherCtrl.prototype.getByLocation = function(type) {
	return function(lat, lon) {
		var request = weatherService.getByLocation(this.appid, this.urls[type]);

		return request(lat, lon);
	}.bind(this);
}

module.exports = WeatherCtrl;