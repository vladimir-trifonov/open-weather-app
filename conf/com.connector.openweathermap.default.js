/**
 * Example configuration for connector/com.connector.openweathermap.
 * Make the changes below as required for your environment.
 */
module.exports = {
	connectors: {
		'com.connector.openweathermap': {
			appid: 'OPEN_WEATHER_MAP_API_ID',
			urls: {
				forecast: 'api.openweathermap.org/data/2.5/forecast'
			}
		}
	}
};