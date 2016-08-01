import WeatherService from '../weather.service';

export default class extends WeatherService {
	protected modelName: string = 'forecast';
	protected route: string;
	constructor(key, url, route) {
		super(key, url);

		this.route = route;
	}

	// Get forecast - calls getData method in Weather component controller
	public getForecast(): any {
		return this.getData(this.route)
			.then((data) => {
				return data[this.modelName];
			});
	}
}