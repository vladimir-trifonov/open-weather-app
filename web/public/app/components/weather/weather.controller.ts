import BaseCtrl from '../../common/base/base.controller';
import weatherTemplate from './weather.template.html!text';
import './weather.css!';

export default class extends BaseCtrl {
	private weatherSel: string = 'weather';
	constructor() {
		super();
	}

	protected renderData(templateInfo, data) {
		this.render([{
			template: weatherTemplate
		}, templateInfo], data);
	}

	protected initEvents(selector, event, cb) {
		this.attachEvents([this.weatherSel, selector], event, cb);
	}
}