import $ from 'jquery';

export default class {
	constructor() {}
	
	protected get(options): IPromise<any> {
		return $.ajax(options);
	}
}