/**
 * Example configuration for connector/com.connector.openweathermap.
 * Make the changes below as required for your environment.
 */
module.exports = {
	connectors: {
		'com.connector.openweathermap': {
			appid: process.env.OPEN_WEATHER_MAP_API_ID,
			city: 'London',
			urls: {
				forecast: 'http://api.openweathermap.org/data/2.5/forecast'
			}
		}
	}
};