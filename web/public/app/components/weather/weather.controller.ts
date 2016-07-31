import BaseCtrl from '../../common/base/base.controller';
import weatherTemplate from './weather.template.html!text';
import './weather.css!';

export default class extends BaseCtrl {
	private weatherSel: string = '.view-weather';
	constructor() {
		super();
	}

	protected renderData(template, data) {
		this.render([{
			template: weatherTemplate
		}, {
			selector: this.weatherSel,
			template: template
		}], data);
	}

	protected initEvents(selector, event, cb) {
		this.attachEvents([this.weatherSel, selector], event, cb);
	}
}