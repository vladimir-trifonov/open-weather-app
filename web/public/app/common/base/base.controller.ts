import $ from 'jquery';
import jsrender from 'jsrender';
jsrender($);

export default class {
	private viewSel: string = '.view';
	constructor() {}

	protected render(templatesInfo, data) {
		let result = templatesInfo.reduce((resultTplInfo, currentTplInfo) => {
			const rendered = $.templates(currentTplInfo.template).render(data);

			if (!resultTplInfo) {
				resultTplInfo = {
					selector: currentTplInfo.selector,
					template: $(`<div>${rendered}</div>`)
				};
			} else {
				if (currentTplInfo.selector) {
					resultTplInfo.template.find(currentTplInfo.selector).append(rendered);
				} else {
					resultTplInfo.template.append(rendered);
				}
			}

			return resultTplInfo;
		}, null);

		result.template = (result.template.clone()).html();
		this.renderTemplate(result);
	}

	private renderTemplate(templateInfo) {
		$('body').find(templateInfo.selector || this.viewSel).html(templateInfo.template);
	}

	protected attachEvents(selectors, event, cb) {
		$(selectors[0]).on(event, selectors[1], cb);
	}
}