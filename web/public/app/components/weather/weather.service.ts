import $ from 'jquery';
import BaseService from '../../common/base/base.service';
import utils from '../../common/utils/location';

export default class extends BaseService {
	protected url: string;
	protected key: string;
	constructor(key, url) {
		super();

		this.url = url;
		this.key = key;
	}

	protected getData(route): IPromise < any > {
		return new Promise((resolve, reject) => {
			utils.getLocation((position) => {
				let url = `${this.url}${route}`;

				if (position) {
					url += `/query?where={"lat":${position.coords.latitude},"lon":${position.coords.longitude}}`;
				}

				this.get({
					url,
					beforeSend: (xhr) => {
							xhr.setRequestHeader('Authorization', `Basic ${btoa(`${this.key}:`)}`);
						}
				})
				.done(resolve)
				.fail(reject);
			});
		});
	}
}