var util = require('util');
var WeatherCtrl = require('./weather.ctrl');

var Weather = function(appid, urls) {
	WeatherCtrl.call(this);

	this.appid = appid;
	this.urls = urls;
};

util.inherits(Weather, WeatherCtrl);

module.exports.create = function(appid, urls) {
	return new Weather(appid, urls);
};