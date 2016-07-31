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
	private forecastSel: string = '.day';
	constructor(key, url, route) {
		super();

		this.service = new ForecastService(key, url, route);

		this.init();
	}

	private init() {
		this.service.getForecast()
			.then((forecast) => {
				this.renderForecast({
					full_date: moment().format('dddd, MMM DD YYYY'),
					city: forecast.city,
					forecast: helper.formatForecast(forecast.list)
				});

				this.initEvents(this.forecastSel, 'click', this.handleClickEvent);
			});
	}

	private handleClickEvent(e) {
		$(e.currentTarget).toggleClass('revealed');
		if ($(e.currentTarget).hasClass('revealed')) {
			$(e.currentTarget).css('height', '540px');
		} else {
			$(e.currentTarget).removeAttr('style');
		}
	}

	private renderForecast(data) {
		this.renderData(template, data);
	}
}