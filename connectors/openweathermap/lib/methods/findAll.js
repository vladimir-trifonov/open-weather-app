/**
 * Finds all model instances.  A maximum of 1000 models are returned.
 * @param {Arrow.Model} Model The model class being updated.
 * @param {Function} callback Callback passed an Error object (or null if successful) and the models.
 */
exports.findAll = function getForecast(Model, callback) {
	var request = this.client.get('forecast');

	request()
		.then(function(forecast) {
			callback(null, Model.connector.createInstance(Model, forecast));
		})
		.catch(callback);
};