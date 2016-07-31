import $ from 'jquery';
import jsrender from 'jsrender';
jsrender($);

export default class {
	private viewSel: string = '.view';
	constructor() {}

	protected render(templatesInfo, data) {
		let result = templatesInfo.reduce((resultTplInfo, currentTplInfo) => {
			if (!resultTplInfo) {
				resultTplInfo = {
					selector: currentTplInfo.selector,
					template: $(`<div>${currentTplInfo.template}</div>`)
				};
			} else {
				if (currentTplInfo.selector) {
					resultTplInfo.template.find(currentTplInfo.selector).append(currentTplInfo.template);
				} else {
					resultTplInfo.template.append(currentTplInfo.template);
				}
			}
			return resultTplInfo;
		}, null);

		result.template = (result.template.clone()).html();
		this.renderTemplate(result, data);
	}

	private renderTemplate(templateInfo, data) {
		let tpl = $.templates(templateInfo.template);
		$('body').find(templateInfo.selector || this.viewSel).html(tpl.render(data));
	}

	protected attachEvents(selectors, event, cb) {
		$(selectors[0]).on(event, selectors[1], cb);
	}
}