/**
 * Queries for particular model records.
 * @param {Arrow.Model} Model The model class being updated.
 * @param {ArrowQueryOptions} options Query options.
 * @param {Function} callback Callback passed an Error object (or null if successful) and the model records.
 * @throws {Error} Failed to parse query options.
 */
exports.query = function(Model, options, callback) {
	if (!options.where || typeof options.where.lat !== 'number' || typeof options.where.lon !== 'number') {
		return callback(new Error('Wrong query params in where clause: lat, lon!'));
	}

	var query = {
		lat: options.where.lat,
		lon: options.where.lon
	};

	var request = this.client.getByLocation(Model.name);

	request(query.lat, query.lon)
		.then(function(forecast) {
			callback(null, Model.instance(forecast, true));
		})
		.catch(callback);
};