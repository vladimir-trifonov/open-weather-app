/**
 * Disconnects from your data store.
 * @param next
 */
exports.disconnect = function (next) {
	this.client = null;
	next();
};
