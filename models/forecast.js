var Arrow = require('arrow');

var Forecast = Arrow.Model.extend('forecast', {
	fields: {
		"city": {
			"id": {
				type: Number
			},
			"name": {
				type: String
			},
			"coord": {
				lat: {
					type: Number
				},
				lon: {
					type: Number
				}
			},
			"country": {
				type: String
			}
		},
		"list": {
			type: Array
		}
	},
	connector: 'com.connector.openweathermap'
});

module.exports = Forecast;