import WeatherService from '../weather.service';

export default class extends WeatherService {
	protected route: String;
	constructor(url, route) {
		super(url);

		this.route = route;
	}
}