/**
 * Finds all model instances.  A maximum of 1000 models are returned.
 * @param {Arrow.Model} Model The model class being updated.
 * @param {Function} callback Callback passed an Error object (or null if successful) and the models.
 */
exports.findAll = function getForecast(Model, callback) {
	if(!this.config.city) {
		return callback('Missing config param: city');
	}

	var request = this.client.get(Model.name);

	request(this.config.city)
		.then(function(data) {
			callback(null, Model.instance(data, true));
		})
		.catch(callback);
};