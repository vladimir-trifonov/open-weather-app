import $ from 'jquery';
import BaseService from '../../common/base/base.service';
import utils from '../../common/utils/location';

export default class extends BaseService {
	protected url: string;
	protected key: string;
	constructor(key, url) {
		super();

		// Config
		this.url = url;
		this.key = key;
	}

	// Get weather data
	protected getData(route): IPromise < any > {
		return new Promise((resolve, reject) => {
			// Try to get user's location
			utils.getLocation((position) => {
				let url = `${this.url}${route}`;

				// If the location is present search by it
				if (position) {
					url += `/query?where={"lat":${position.coords.latitude},"lon":${position.coords.longitude}}`;
				}

				this.get({
					url,
					beforeSend: (xhr) => {
							// Basic auth
							xhr.setRequestHeader('Authorization', `Basic ${btoa(`${this.key}:`)}`);
						}
				})
				.done(resolve)
				.fail(reject);
			});
		});
	}
}