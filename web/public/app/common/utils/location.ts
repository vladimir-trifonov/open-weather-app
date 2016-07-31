export default {
	getLocation: (cb) => {
		if (navigator.geolocation) {
			new Promise((resolve, reject) => {
				let t = window.setTimeout(() => {
					reject(null)
				}, 8000);

				navigator.geolocation.getCurrentPosition(
					(position) => {
						window.clearTimeout(t);
						resolve(position);
					},
					(error) => {
						window.clearTimeout(t);
						reject(error);
					}
				);
			}).then(cb).catch(() => {
				cb(null);
			});
		} else {
			cb(null)
		}
	}
}