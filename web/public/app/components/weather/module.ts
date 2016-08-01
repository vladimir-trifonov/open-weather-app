import Forecast from './forecast/module';

export default class {
	constructor(config) {
		// Create new Forecast component which extends Weather component
		new Forecast(config.key, config.url, config.routes.forecast);
	}
}