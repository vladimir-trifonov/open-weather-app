import $ from 'jquery';
import jsrender from 'jsrender';
// Extend jQuery with jsRenderer
jsrender($);

// Dom renderer
export default class {
	private viewSel: string = '.view';
	constructor() {}

	protected render(templatesInfo, data) {
		// Rendered templates and insert them to the dom with specific hierarchy
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
		// Renders view
		$('body').find(templateInfo.selector || this.viewSel).html(templateInfo.template);
	}

	// Attach events listeners
	protected attachEvents(selectors, event, cb) {
		$(selectors[0]).on(event, selectors[1], cb);
	}
}