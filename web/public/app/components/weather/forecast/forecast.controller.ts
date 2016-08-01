///<reference path="typings/moment/moment.d.ts" />

import helper from './forecast.helper';
import WeatherCtrl from '../weather.controller';
import ForecastService from './forecast.service';
import template from './forecast.template.html!text';
import './forecast.css!';
import moment from 'moment';
import $ from 'jquery';

export default class extends WeatherCtrl {
	protected service: ForecastService;
	private forecastSel: string = 'forecast';
	constructor(key, url, route) {
		super();

		this.service = new ForecastService(key, url, route);

		this.init();
	}

	private init() {
		// Get the forecast data
		this.service.getForecast()
			.then((forecast) => {
				// Render the forecast data - calls renderData method in Weather component controller
				this.renderForecast({
					full_date: moment().format('dddd, MMM DD YYYY'),
					city: forecast.city,
					forecast: helper.formatForecast(forecast.list)
				});

				// Init forecast component listeners
				this.initEvents('.day', 'click', this.handleClickEvent);
			});
	}

	// Toggle display day forecast details info
	private handleClickEvent(e) {
		let $el = $(e.currentTarget);
		$el.toggleClass('revealed');
		if ($el.hasClass('revealed')) {
			$el.css('height', `${($el.data('cnt') + 1) * 60}px`);
		} else {
			$el.removeAttr('style');
		}
	}

	private renderForecast(data) {
		this.renderData({
			selector: this.forecastSel,
			template: template
		}, data);
	}
}