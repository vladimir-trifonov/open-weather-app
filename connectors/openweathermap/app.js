/**
 * NOTE: This file is simply for testing this connector and will not
 * be used or packaged with the actual connector when published.
 */
var Arrow = require('arrow'),
	server = new Arrow();

// TODO: Define a model that you can use when you run the connector locally for testing.
server.addModel(Arrow.Model.extend('forecast', {
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
}));

server.start();