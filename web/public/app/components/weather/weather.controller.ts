import BaseCtrl from '../../common/base/base.controller';
import weatherTemplate from './weather.template.html!text';
import './weather.css!';

export default class extends BaseCtrl {
	private weatherSel: string = 'weather';
	constructor() {
		super();
	}

	// Render Weather component in the browser
	protected renderData(templateInfo, data) {
		this.render([{
			template: '<weather></weather>'
		}, {
			selector: this.weatherSel,
			template: weatherTemplate
		}, templateInfo], data);
	}

	// Init Weather component events listeners
	protected initEvents(selector, event, cb) {
		this.attachEvents([this.weatherSel, selector], event, cb);
	}
}