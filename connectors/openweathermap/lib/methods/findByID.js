/**
 * Finds a model instance using the primary key.
 * @param {Arrow.Model} Model The model class being updated.
 * @param {Object} location object.
 * @param {Function} callback Callback passed an Error object (or null if successful) and the found model.
 */
exports.findById = function getForecast(Model, location, callback) {
	var request = this.client.getByLocation('forecast');

	request(location.lat, location.lon)
		.then(function(forecast) {
			callback(null, Model.connector.createInstance(Model, forecast));
		})
		.catch(callback);
};
