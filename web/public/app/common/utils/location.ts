export default {
	getLocation: (cb) => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(cb);
		} else {
			cb(null);
		}
	}
}