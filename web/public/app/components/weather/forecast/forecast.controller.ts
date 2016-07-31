import WeatherCtrl from '../weather.controller';
import ForecastService from './forecast.service';
import template from './forecast.template.html!text';

export default class extends WeatherCtrl {
	protected service: ForecastService;
	constructor(key, url, route) {
		super();

		this.service = new ForecastService(key, url, route);

		this.init();
	}

	private init() {
		this.service.getForecast()
			.done((forecast) => {
				this.renderForecast(forecast);
			});
	}

	private renderForecast(data) {
		this.renderData(template, data);
	}
}