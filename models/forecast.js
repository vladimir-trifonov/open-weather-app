var Arrow = require('arrow');

var Forecast = Arrow.Model.extend('forecast', {
	fields: {
		"city": {
			type: Object
		},
		"list": {
			type: Array
		}
	},
	connector: 'com.connector.openweathermap'
});

module.exports = Forecast;