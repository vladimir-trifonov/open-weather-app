var util = require('util');
var WeatherCtrl = require('./weather.ctrl');

var Weather = function(apiid, urls) {
	WeatherCtrl.call(this);

	this.apiid = apiid;
	this.urls = urls;
};

util.inherits(Weather, WeatherCtrl);

module.exports.create = function(apiid, urls) {
	return new Weather(apiid, urls);
};