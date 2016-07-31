import BaseService from '../../common/base/base.service';

export default class extends BaseService {
	protected url: string;
	protected key: string;
	constructor(key, url) {
		super();

		this.url = url;
		this.key = key;
	}

	protected getData(route): IPromise < any > {
			return this.get({
						url: `${this.url}${route}`,
						beforeSend: (xhr) => {
								xhr.setRequestHeader('Authorization', `Basic ${btoa(`${this.key}:`)}`);
				}
			});
	}
}