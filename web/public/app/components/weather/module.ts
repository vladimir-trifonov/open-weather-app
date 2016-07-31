import Forecast from './forecast/module';

export default class {
	constructor(config) {
		new Forecast(config.key, config.url, config.routes.forecast);
	}
}