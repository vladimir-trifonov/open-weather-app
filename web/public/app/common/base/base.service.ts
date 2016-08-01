import $ from 'jquery';

export default class {
	constructor() {}

	// Ajax request
	protected get(options): IPromise<any> {
		return $.ajax(options);
	}
}