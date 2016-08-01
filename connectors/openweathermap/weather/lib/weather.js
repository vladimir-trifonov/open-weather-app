// Weather module based component

var util = require('util');
var WeatherCtrl = require('./weather.ctrl');

var Weather = function(appid, urls) {
	WeatherCtrl.call(this);

	// Open weather map api key
	this.appid = appid;

	// Urls to get weather data form OpenWeatherMap's service
	this.urls = urls;
};

// Add functionality to the component
util.inherits(Weather, WeatherCtrl);
Weather.prototype.constructor = Weather;

// Create new instance
module.exports.create = function(appid, urls) {
	return new Weather(appid, urls);
};