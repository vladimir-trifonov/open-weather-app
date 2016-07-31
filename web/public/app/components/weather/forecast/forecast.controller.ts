import WeatherCtrl from '../weather.controller';
import ForecastService from './forecast.service';

export default class extends WeatherCtrl {
	protected ForecastService: ForecastService;
	constructor(url, route) {
		super();

		this.ForecastService = new ForecastService(url, route);
	}
}