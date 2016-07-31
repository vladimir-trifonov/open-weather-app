/**
 * Finds all model instances.  A maximum of 1000 models are returned.
 * @param {Arrow.Model} Model The model class being updated.
 * @param {Function} callback Callback passed an Error object (or null if successful) and the models.
 */
exports.findAll = function getForecast(Model, callback) {
	var request = this.client.get(Model.name);

	request(this.config.city)
		.then(function(forecast) {
			callback(null, Model.instance(forecast, true));
		})
		.catch(callback);
};