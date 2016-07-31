import BaseCtrl from '../../common/base/base.controller';
import weatherTemplate from './weather.template.html!text';

export default class extends BaseCtrl {
	constructor() {
		super();
	}

	protected renderData(template, data) {
		this.render([{
			template: weatherTemplate
		}, {
			selector: '.view-weather',
			template: template
		}], data);
	}
}