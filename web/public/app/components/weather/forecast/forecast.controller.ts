///<reference path="typings/moment/moment.d.ts" />

import helper from './forecast.helper';
import WeatherCtrl from '../weather.controller';
import ForecastService from './forecast.service';
import template from './forecast.template.html!text';
import './forecast.css!';
import moment from 'moment';

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
			});
	}

	private renderForecast(data) {
		this.renderData(template, data);
	}
}