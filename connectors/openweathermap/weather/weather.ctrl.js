var weatherService = require('./weather.service');

var WeatherCtrl = function() {};

WeatherCtrl.prototype.get = function(type) {
	return function() {
		var request = weatherService.get(this.apiid, this.urls[type]);

		return request();
	}
}

WeatherCtrl.prototype.getByLocation = function(type) {
	return function(lat, lon) {
		var request = weatherService.getByLocation(this.apiid, this.urls[type]);

		return request(lat, lon);
	}
}

module.exports = WeatherCtrl;