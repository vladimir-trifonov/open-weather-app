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
				"lon": {
					type: Number
				},
				"lat": {
					type: Number
				}
			},
			"country": {
				type: String
			},
			"cod": {
				type: String
			},
			"message": {
				type: Number
			},
			"cnt": {
				type: Number
			},
			"list": {
				type: Array
			}
		}
	},
	connector: 'com.connector.openweathermap'
});

module.exports = Forecast;